import { useState, useEffect, useRef } from "react";
import Moviecard from "../moviecard/Moviecard";
import Morebtn from "../morebtn/Morebtn";

function Moviecardlist({movies, favoriteMovies, cardQuantity}) {
const [elementOnPage, setElementOnPage] = useState(12);
const [moreBtnVision, setMoreBtnVision] = useState();
const [moreElement, setMoreElement] = useState(12);

useEffect(() => {
    movies.length > moreElement ? setMoreBtnVision(true) : setMoreBtnVision(false);
    movies.length === elementOnPage ? setMoreBtnVision(false) : setMoreBtnVision(true);
}, [movies.length])

useEffect(() => {
    if(cardQuantity >= 1210) {
        setElementOnPage(12);
        setMoreElement(3)
        movies.length > 12 ? setMoreBtnVision(true) : setMoreBtnVision(false);
    } else if(cardQuantity >= 737 && cardQuantity < 1210) {
        setElementOnPage(8);
        setMoreElement(2)
        movies.length > 8 ? setMoreBtnVision(true) : setMoreBtnVision(false);
    } else if (cardQuantity < 737 && cardQuantity < 737) {
        setElementOnPage(5);
        setMoreElement(2)
        movies.length > 5 ? setMoreBtnVision(true) : setMoreBtnVision(false);
    }
},[cardQuantity]);


function getMoreFilms() {
    setElementOnPage(elementOnPage + moreElement);
}

    return (
    <>
        <section className="moviecardlist">
        {movies.slice(0, elementOnPage).map((movie) => {
            // console.log(movie)
            return (
        <Moviecard
                favoriteMovies={favoriteMovies}
                key={movie.id}
                filmImage={movie.image.url}
                title={movie.nameRU}
                duration={movie.duration}
                trailerLink={movie.trailerLink}
        />
        );
        })}
        </section>
        {moreBtnVision && <Morebtn getMoreFilms={getMoreFilms}/>}
    </>
    )
    }

export default Moviecardlist;