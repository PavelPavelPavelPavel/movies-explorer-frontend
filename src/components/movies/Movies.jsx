import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import Searchform from "../searchform/Searchform";
import Moviecardlist from "../moviecardlist/Moviecardlist";
import Savedmovies from "../savedmovies/Savedmovies";
import FilmError from "../filmerror/Filmerror";

function Movies({movies, savedMovies, cardQuantity, getFilms, onSavedSearch, onAddToFavorite, onDeleteFilm}) {
  const location = useLocation();
  const [checkBox, setCheckBox] = useState(false);
  const [moviesPresence, setMoviesPresence] = useState(true);

 
  useEffect(() => {
    if(location.pathname === '/movies') {
      movies.length > 0 ? setMoviesPresence(true) : setMoviesPresence(false); 
    } 
  }, [movies.length, location.pathname]);

  useEffect(() => {
    if(location.pathname === '/saved-movies') {
      savedMovies.length > 0 ? setMoviesPresence(true) : setMoviesPresence(false); 
    }
  }, [savedMovies.length, location.pathname]);

 
  function getShortFilms(checked) {
    setCheckBox(checked)
  }

  // function getDifference() {
  //   const mov = movies.map((mov) => {
  //     return mov.id
  //   })
  //   const savedMov = savedMovies.map((mov) => {
  //     return mov.movieId
  //   })
  //     return mov.filter(item => savedMov.includes(item)); 
  // }

    return (
      <div className="movies">
        <Searchform getShortFilms={getShortFilms} getFilms={getFilms} 
                    movies={movies} savedMovies={savedMovies} onSavedSearch={onSavedSearch}
                    />
        {location.pathname === '/saved-movies' ?
                          (moviesPresence && <Savedmovies 
                              movies={movies}
                              savedMovies={savedMovies} 
                              onDeleteFilm={onDeleteFilm}
                              checkBox={checkBox}
                            />) : 
                        (!moviesPresence && <FilmError moviesPresence={moviesPresence}/>)}
        {location.pathname === '/movies' ?
                        (moviesPresence && <Moviecardlist
                            movies={movies}
                            cardQuantity={cardQuantity}
                            checkBox={checkBox}
                            onAddToFavorite={onAddToFavorite}
                      />) :
                        (!moviesPresence && <FilmError moviesPresence={moviesPresence}/>)}
      </div>
    );
  }
  
  export default Movies;