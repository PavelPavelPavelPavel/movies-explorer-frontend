import { useState, useEffect } from "react";
import Moviecard from "../moviecard/Moviecard";
import Morebtn from "../morebtn/Morebtn";

function Moviecardlist({movies, favoriteMovies, cardQuantity}) {
const [elementOnPage, setElementOnPage] = useState(12);
const [moreBtnVision, setMoreBtnVision] = useState(false);

useEffect(() => {
    if(cardQuantity >= 1210) {
        setElementOnPage(12);
        movies.length > 12 ? setMoreBtnVision(true) : setMoreBtnVision(false);
    } else if(cardQuantity >= 737 && cardQuantity < 1210) {
        setElementOnPage(8)
        movies.length > 8 ? setMoreBtnVision(true) : setMoreBtnVision(false);
    } else if (cardQuantity < 737 && cardQuantity < 737) {
        setElementOnPage(5)
        movies.length > 5 ? setMoreBtnVision(true) : setMoreBtnVision(false);
    }
},[cardQuantity]);


function getMoreFilms() {
    setElementOnPage(movies.length)
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
        {moreBtnVision && <Morebtn getMoreFilms={getMoreFilms}/>}
    </>
    )
    }

export default Moviecardlist;