import { useState } from "react";
import Moviecard from "../moviecard/Moviecard";
import Morebtn from "../morebtn/Morebtn";

function Moviecardlist({movies, favoriteMovies}) {
const [elementOnPage, setElementOnPage] = useState(12);
    

function getMoreFilms() {
    setElementOnPage(elementOnPage + 6)
}
    return (
    <>
        <section className="moviecardlist">
        {movies.slice(0, elementOnPage).map((movie) => {
            return (
        <Moviecard
                favoriteMovies={favoriteMovies}
                key={movie.id}
                link={movie.url}
                title={movie.title}
        />
        );
        })}
        </section>
        { movies.length > 12 && <Morebtn getMoreFilms={getMoreFilms}/>}
    </>
    )
    }

export default Moviecardlist;