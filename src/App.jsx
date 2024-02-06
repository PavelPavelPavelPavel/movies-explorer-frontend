
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
import Login from "./components/login/Login";
import movieApi from "./utils/MovieApi";


function App() {
  const resize = useResize();
  const location = useLocation();
  const navigate = useNavigate();
  const [loggedIn, setLoggedIn] = useState(true);
  const [currnetUser, setCurrentUser] = useState({name: '', email: ''})
  const [movies, setMovies] = useState([]);
  const [savedMovies, setSavedMovies] = useState([]);
  const [likedMovies, setLikedMovies] = useState([]);
  const [loc, setLoc] = useState(false);
  const [greetingText, setGreetingText] = useState('');
  const [modalState, setModalState] = useState(false);
  const [btnDropList, setBtnDropList] = useState(false);
  const [cardQuantity, setCardQuantity] = useState();
  
  useEffect(() => {
    if(loggedIn) {
      movieApi.getFilms()
      .then(films => {
        setMovies(films);
      })
      .catch(err => {
        console.log(err)
      })
    }
  }, [loggedIn])
  

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
    if(location.pathname === "/signin")  {
      setLoc(true);
      setGreetingText('Рады видеть!');
    } else if (location.pathname === "/signup") {
      setLoc(true)
      setGreetingText('Добро пожаловать!');
    } else {
      setLoc(false)
    }
  }, [location.pathname]);


  function initModalNavbar() {
    modalState ? setModalState(false) : setModalState(true);
};


  function logOut() {
      navigate('/');
      setLoggedIn(false);
  };


  return (
    <>
      <CurrentUserContext.Provider value={{
        currnetUser,
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
                        <Register />
                    }/>
                    <Route path="/signin" element={
                        <Login />
                    }/>
                    <Route path='/movies' element={
                    <ProtectedRoute loggedIn={loggedIn}>
                     <Movies  
                     movies={movies} 
                     saveMovies={likedMovies}
                     cardQuantity={cardQuantity}
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
                      <Profile logOut={logOut}/>
                      </ProtectedRoute>
                    } />
                    <Route path='*' element={<Notfounderr />} />
                  </ Routes>
                  </div>
                  {location.pathname !== "/profile" && !loc && !modalState && <Footer />}
          </div >
      </CurrentUserContext.Provider>
    </>
  );
}

export default App;
