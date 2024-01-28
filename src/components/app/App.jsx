
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
import Savedmovies from "../savedmovies/Savedmovies";
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

  useEffect(() => {
    setMovies(films);
    setLikedMovies(film);
  }, []);

  return (
    <>
      {/* <CurrentUserContext> */}
          <div className="App">
            <Header login={loggedIn} />
                  <Routes>
                    <Route path='/' 
                    element={
                      <>
                      <Main />
                      </>}
                      />
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
                    <Route path='*' element={<Notfounderr />} />
                    {/* <Profile /> */}
                    {/* <Register /> */}
                    {/* <Login /> */}
                  </ Routes>
                  <Footer />
          </div >
      {/* </CurrentUserContext> */}
    </>
  );
}

export default App;
