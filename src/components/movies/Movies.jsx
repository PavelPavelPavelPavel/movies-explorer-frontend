import { useLocation } from "react-router-dom";
import { useState } from "react";
import Searchform from "../searchform/Serachform";
import Moviecardlist from "../moviecardlist/Moviecardlist";
import Savedmovies from "../savedmovies/Savedmovies";

function Movies({movies, saveMovies, cardQuantity}) {
  const location = useLocation();
  const favoriteMovies = [];
  const [checkBox, setCheckBox] = useState(false);


  function getShortFilms(checked) {
    setCheckBox(checked)
  }

    return (
      <div className="movies">
        <Searchform getShortFilms={getShortFilms}/>
        {location.pathname === '/saved-movies' 
        ? <Savedmovies saveMovies={saveMovies} 
                       favoriteMovies={favoriteMovies}
                       />
        :  <Moviecardlist
              movies={movies}
              favoriteMovies={favoriteMovies}
              cardQuantity={cardQuantity}
              checkBox={checkBox}
                      />}
      </div>
    );
  }
  
  export default Movies;