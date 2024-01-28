import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import Searchform from "../searchform/Serachform";
import Morebtn from "../morebtn/Morebtn";
import Moviecardlist from "../moviecardlist/Moviecardlist";
import Moviecard from "../moviecard/Moviecard";
import Savedmovies from "../savedmovies/Savedmovies";

function Movies({movies, saveMovies}) {
  const location = useLocation();
  console.log(saveMovies)
  function chekAddFilm () {

  }

    return (
      <div className="movies">
        <Searchform/>
        {location.pathname === '/saved-movies' 
        ? <Savedmovies saveMovies={saveMovies}/>
        :  <Moviecardlist
        movies={movies}/>}
       {/* <Morebtn/>  */}
      </div>
    );
  }
  
  export default Movies;