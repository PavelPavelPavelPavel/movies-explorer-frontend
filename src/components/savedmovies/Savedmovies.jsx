import { useState, useEffect } from "react";
import Moviecard from "../moviecard/Moviecard";

function Savedmovies({savedMovies, checkBox, movies, onDeleteFilm,  getDifference}) {
   const [renderMovies, setRenderMovies] = useState([]);

   useEffect(() => {
   const shortMovies = savedMovies.filter((film) => film.duration < 40);
        checkBox ? setRenderMovies(shortMovies) : setRenderMovies(savedMovies);
    }, [savedMovies, checkBox]);

 return (
        <section className="savedmovies">
        {renderMovies.map((movie) => {
            return (
        <Moviecard
                key={movie._id}
                id={movie.id}
                filmId={movie._id}
                filmImage={movie.image.slice(29)}
                title={movie.nameRU}
                duration={movie.duration}
                trailerLink={movie.trailerLink}
                onDeleteFilm={onDeleteFilm}
                getDifference={getDifference}
                movies={movies}
        />
        );
        })}
        </section>
        )
        }

export default Savedmovies;