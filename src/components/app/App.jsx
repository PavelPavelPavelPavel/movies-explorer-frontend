
import React from "react";
import { useState, useEffect } from "react";
import { Routes, Route, Link, useNavigate, useLocation } from "react-router-dom";
// import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import "../../index.css";
import Header from '../header/Header'
import Main from '../main/Main';
import Footer from '../footer/Footer';
import Notfounderr from '../notfounderr/Notfounderr';
import Movies from '../movies/Movies';
import  { films, film }  from '../../constants';
import Profile from "../profile/Profile";
import Register from "../register/Register";
import Login from "../login/Login";



function App() {
  const location = useLocation();
  const navigate = useNavigate();
  const [loggedIn, setLoggedIn] = useState(false);
  const [movies, setMovies] = useState([]);
  const [likedMovies, setLikedMovies] = useState([]);
  const [loc, setLoc] = useState(false);
  const [greetingText, setGreetingText] = useState('');

  useEffect(() => {
    setMovies(films);
    setLikedMovies(film);
  }, []);

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
            />
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
                     saveMovies={likedMovies}/>                
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
                  {location.pathname !== "/profile" && !loc && <Footer />}
          </div >
      {/* </CurrentUserContext> */}
    </>
  );
}

export default App;
