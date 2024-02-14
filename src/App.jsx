
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
  const [likedMovies, setLikedMovies] = useState([]);
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
			Promise.all([mainApi.getInfo(), mainApi.getSavedFilms()])
				.then(([user, films]) => {
					setCurrentUser(user);
					setSavedMovies(films)
				})
				.catch((err) => console.log(err));
		}
	}, [loggedIn]);

  

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

  function getFilms() {
    setPreloaderStatus(true);
    movieApi.getFilms()
    .then(movies => {
        setMovies(movies);
    })
    .catch(err => console.log(err))
    .finally(() => setPreloaderStatus(false))
  }

  function onAddToFavorite() {

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
                     saveMovies={likedMovies}
                     cardQuantity={cardQuantity}
                     getFilms={getFilms}
                     />                
                     </ProtectedRoute>
                    } />
                    <Route path="saved-movies" element={
                         <ProtectedRoute loggedIn={loggedIn}>                     
                        <Movies  
                        saveMovies={likedMovies} 
                        movies={movies}
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
