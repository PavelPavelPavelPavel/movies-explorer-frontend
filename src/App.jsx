
import React from "react";
import { useState, useEffect } from "react";
import { Routes, Route, Link, useNavigate, useLocation } from "react-router-dom";
// import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import  useResize  from "../src/utils/ResizeWidth";
import "./index.css";
import Header from './components/header/Header'
import Main from './components/main-landing/Main';
import Footer from './components/footer/Footer';
import Notfounderr from './components/notfounderr/Notfounderr';
import Movies from './components/movies/Movies';
import  { films, film }  from './constants';
import Profile from "./components/profile/Profile";
import Register from "./components/register/Register";
import Login from "./components/login/Login";



function App() {
  const resize = useResize();
  const location = useLocation();
  const navigate = useNavigate();
  const [loggedIn, setLoggedIn] = useState(true);
  const [movies, setMovies] = useState([]);
  const [likedMovies, setLikedMovies] = useState([]);
  const [loc, setLoc] = useState(false);
  const [greetingText, setGreetingText] = useState('');
  const [modalState, setModalState] = useState(false);
  const [btnDropList, setBtnDropList] = useState(false);
  const [cardQuantity, setCardQuantity] = useState();
  useEffect(() => {
    setMovies(films);
    setLikedMovies(film);
  }, []);

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
  }, [location]);

  function initModalNavbar() {
    modalState ? setModalState(false) : setModalState(true);
};

console.log(modalState)

  function logOut() {
      navigate('/');
      setLoggedIn(false);
  };


  return (
    <>
      {/* <CurrentUserContext> */}
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
                      <>
                     <Movies  
                     movies={movies} 
                     saveMovies={likedMovies}
                     cardQuantity={cardQuantity}
                     />                
                     </>
                    } />
                    <Route path="saved-movies" element={
                        <>                      
                        <Movies  
                        saveMovies={likedMovies} 
                        movies={movies}/>                        
                        </>
                    } />
                    <Route path="/profile" element={
                      <Profile logOut={logOut}/>
                    } />
                    <Route path='*' element={<Notfounderr />} />
                  </ Routes>
                  </div>
                  {location.pathname !== "/profile" && !loc && <Footer />}
          </div >
      {/* </CurrentUserContext> */}
    </>
  );
}

export default App;
