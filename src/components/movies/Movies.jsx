import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import Searchform from "../searchform/Searchform";
import Moviecardlist from "../moviecardlist/Moviecardlist";
import Savedmovies from "../savedmovies/Savedmovies";
import FilmError from "../filmerror/Filmerror";

function Movies({movies, saveMovies, cardQuantity, getFilms}) {
  const location = useLocation();
  const favoriteMovies = [];
  const [checkBox, setCheckBox] = useState(false);
  const moviesPresence = movies.length > 0 ? true : false; 
 
  function getShortFilms(checked) {
    setCheckBox(checked)
  }

    return (
      <div className="movies">
        <Searchform getShortFilms={getShortFilms} getFilms={getFilms} movies={movies}/>
        {moviesPresence ? (location.pathname === '/saved-movies' 
        ?  <Savedmovies saveMovies={saveMovies} 
                       favoriteMovies={favoriteMovies}
                       checkBox={checkBox}
                       />
        :  <Moviecardlist
              movies={movies}
              favoriteMovies={favoriteMovies}
              cardQuantity={cardQuantity}
              checkBox={checkBox}
                      />) : <FilmError moviesPresence={moviesPresence}/>}
      </div>
    );
  }
  
  export default Movies;