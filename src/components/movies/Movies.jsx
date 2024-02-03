import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import Searchform from "../searchform/Serachform";
import Moviecardlist from "../moviecardlist/Moviecardlist";
import Savedmovies from "../savedmovies/Savedmovies";

function Movies({movies, saveMovies}) {
  const location = useLocation();
   const favoriteMovies = [];

//   useEffect(() => {
//     movies.forEach(item => {
//       for(let i = 0; i < saveMovies.length; i++ ) {
//         let elem = saveMovies[i];
//         if (item.id === elem.id) {
//           favoriteMovies.push(elem);
//         }
//       }
//     })
//  }, [movies])
    
    
  function addToFavorite () {
      // favoriteMovies.push()
  }
 
    return (
      <div className="movies">
        <Searchform/>
        {location.pathname === '/saved-movies' 
        ? <Savedmovies saveMovies={saveMovies} 
                       favoriteMovies={favoriteMovies}
                       />
        :  <Moviecardlist
              movies={movies}
              favoriteMovies={favoriteMovies}
                      />}
      </div>
    );
  }
  
  export default Movies;