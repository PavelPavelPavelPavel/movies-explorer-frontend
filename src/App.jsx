
import React from "react";
import { useState, useEffect } from "react";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import { ProtectedRoute } from "./components/protectedroute/ProtectedRoute";
import { CurrentUserContext } from "./contexts/CurrentUserContext";
import  useResize  from "../src/utils/ResizeWidth";
import "./index.css";
import Header from './components/header/Header'
import Main from './components/main-landing/Main';
import Footer from './components/footer/Footer';
import Notfounderr from './components/notfounderr/Notfounderr';
import Movies from './components/movies/Movies';
import Profile from "./components/profile/Profile";
import Register from "./components/register/Register";
import Preloader from "./components/preloader/Preloader";
import Login from "./components/login/Login";
import movieApi from "./utils/MovieApi";
import auth from "./utils/Auth";
import mainApi from "./utils/MainApi";
import InfoPopup from "./components/infopopup/Infopopup";
import { dataChangedText } from "./constants/messageText/successfullyDataChangedText";
import { userAlredyExist, profileUpdateError } from "./constants/errorText/profileErrorText";




function App() {
  const resize = useResize();
  const location = useLocation();
  const navigate = useNavigate();
  const [loggedIn, setLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState({name: '', email: ''})
  const [movies, setMovies] = useState([]);
  const [savedMovies, setSavedMovies] = useState([]);
  const [loc, setLoc] = useState(false);
  const [greetingText, setGreetingText] = useState('');
  const [modalState, setModalState] = useState(false);
  const [btnDropList, setBtnDropList] = useState(false);
  const [cardQuantity, setCardQuantity] = useState();
  const [popupStatus, setPopupStatus] = useState(false);
  const [preloaderStatus, setPreloaderStatus] = useState(false);
  const [errorText, setErrorText] = useState('');
  

  useEffect(() => {
    const jwt = localStorage.getItem('jwt');
    if(jwt && !null) {
      setLoggedIn(true);
      navigate('/movies');
    } else {
      setLoggedIn(false);
      navigate('/');
    }
  }, []);


  useEffect(() => {
		if (loggedIn) {
			Promise.all([mainApi.getInfo()])
				.then(([user]) => {
					setCurrentUser(user);
          
				})
				.catch((err) => console.log(err));
		}
	}, [loggedIn]);

  useEffect(() => {
      if(location.pathname === '/saved-movies') {
        mainApi.getSavedFilms()
        .then(films => {
          setSavedMovies(films)})
        .catch(err => console.log(err))
      }
  }, [location.pathname]);



  useEffect(() => {
    if (resize.isScreenLg) {
      setBtnDropList(false)
      setModalState(false)
    } else {
      setBtnDropList(true)
    }
    setCardQuantity(resize.width)
  }, [resize]);

  useEffect(() => {
    const loc = location.pathname;
    if(loggedIn && loc === "/signin") {
      navigate('/');
    } else if (loggedIn && loc === "/signup") {
      navigate('/');
    };

    if(loc === "/signin")  {
      setLoc(true)
      setGreetingText('Рады видеть!')
    } else if (loc === "/signup") {
      setLoc(true)
      setGreetingText('Добро пожаловать!')
    } else {
      setLoc(false)
    }
  }, [loggedIn, location.pathname, navigate]);

  function findFilm(arr, setArr, value, movies) {
    arr.filter((film) => {
      if(film.nameRU.trim().toLowerCase() === value.toLowerCase()){
        movies.push(film);
      } else if(film.nameEN.trim() === value.toLowerCase()){
        movies.push(film);
      } else if(film.year === value){
        movies.push(film)
       } else {
        setArr([]);
       }
    })
  }

  function getFilms(inputValue) {
    setPreloaderStatus(true);
    const res = [];
    movieApi.getFilms()
    .then(movies => {
      const res = [];
      findFilm(movies, setMovies, inputValue, res);
      setMovies(res);
    })
    .catch(err => {
      console.log(err);
    })
    .finally(() => setPreloaderStatus(false))
  }

  function onSavedSearch(inputValue) {
    const res = [];
    findFilm(savedMovies, setSavedMovies, inputValue, res)
    setSavedMovies(res);
  }


  function onAddToFavorite(filmId, urlApi) {
    movies.filter(film => {
      if(film.id === filmId) {
        const { country, director, duration, year, description, image, trailerLink,
                nameRU, nameEN, owner, id} = film;  
        // console.log(image.url)         
       mainApi.addToFavorite({
        country, director, duration, year, description, image: `${urlApi}${image.url}`, trailerLink,
        nameRU, nameEN,  thumbnail: `${urlApi}${image.url}`, owner, movieId: id
      })
        .then(res => {
           const addedCard = [];
           addedCard.push(res);
           setSavedMovies(addedCard);
        })
        .catch(err => {
          console.log(image.url)
          console.log(err)
        })  
          }
        })
  }

  function onDeleteFilm(filmId) {
    savedMovies.filter(film => {
      if(film._id === filmId) {
        mainApi.deleteFilm(filmId)
        .then(() => {
          mainApi.getSavedFilms()
          .then(films => setSavedMovies(films))
          .catch(err => console.log(err))
        })
        .catch(err => console.log(err))
      } 
    })
  }


  function onClosePopup() {
    setPopupStatus(false);
  }


  function onUserRegister({name, email, password}) {
    setPreloaderStatus(true);
    auth.authentication(name, email, password)
    .then((res) => {
      setCurrentUser({
        name: res.name,
        email: res.email,
      })
      auth.authorization(email, password)
      .then(res => {
        setPreloaderStatus(false);
        localStorage.setItem('jwt', res.token);
        setLoggedIn(true);
        navigate('/movies');
      })
    })
    .catch(err => console.log(err))
    .finally(() => setPreloaderStatus(false))
  };

  function onLogin({email, password}) {
    setPreloaderStatus(true);
    auth.authorization(email, password)
    .then(res => {
      localStorage.setItem('jwt', res.token);
      setPreloaderStatus(false);
      setLoggedIn(true);
      navigate('/movies');
    })
    .catch(err => console.log(err))
    .finally(() => setPreloaderStatus(false))
  };

  function updateUserInfo({name, email}) {
    setPreloaderStatus(true);
    mainApi.updateInfo(name, email)
    .then(res => {
      setCurrentUser({
        name: res.name,
        email: res.email,
      })
      setPreloaderStatus(false);
      setPopupStatus(true);
    })
    .catch(err => {
      console.error(err)
    })
    .finally(() => setPreloaderStatus(false))
  }


  function initModalNavbar() {
    modalState ? setModalState(false) : setModalState(true);
};


  function logOut() {
      localStorage.removeItem('jwt');
      setCurrentUser({
        name: '',
        email: '',
      })
      navigate('/');
      setLoggedIn(false);
  };


  return (
    <>
      <CurrentUserContext.Provider value={{
        currentUser,
      }}>
          <div className="App">
            <Header login={loggedIn}
                    loc={loc}
                    greetingText={greetingText}
                    modalState={modalState}
                    btnDropList={btnDropList}
                    initModalNavbar={initModalNavbar}
            />
             <div className="main">
                  <Routes>
                    <Route path='/' 
                    element={
                      <>
                      <Main />
                      </>}
                      />
                    <Route path="/signup" element={
                        <Register onUserRegister={onUserRegister}/>
                    }/>
                    <Route path="/signin" element={
                        <Login  onLogin={onLogin}/>
                    }/>
                    <Route path='/movies' element={
                    <ProtectedRoute loggedIn={loggedIn}>
                     <Movies  
                     movies={movies} 
                     savedMovies={savedMovies}
                     cardQuantity={cardQuantity}
                     getFilms={getFilms}
                     onAddToFavorite={onAddToFavorite}
                     />                
                     </ProtectedRoute>
                    } />
                    <Route path="saved-movies" element={
                         <ProtectedRoute loggedIn={loggedIn}>                     
                        <Movies  
                        movies={movies}
                        savedMovies={savedMovies}
                        onDeleteFilm={onDeleteFilm} 
                        onSavedSearch={onSavedSearch}
                        />                        
                         </ProtectedRoute>
                    } />
                    <Route path="/profile" element={
                      <ProtectedRoute loggedIn={loggedIn}>
                      <Profile 
                      logOut={logOut}
                      updateUserInfo={updateUserInfo}
                      errorText={errorText}
                      />
                      </ProtectedRoute>
                    } />
                    <Route path='*' element={<Notfounderr />} />
                  </ Routes>
                  {popupStatus && <InfoPopup 
                  onClosePopup={onClosePopup}
                  />}
                  {preloaderStatus && <Preloader />}
                  </div>
                  {location.pathname !== "/profile" && !loc && !modalState && <Footer />}
          </div >
      </CurrentUserContext.Provider>
    </>
  );
}

export default App;
