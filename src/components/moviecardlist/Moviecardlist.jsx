import { useState, useEffect } from "react";
import Moviecard from "../moviecard/Moviecard";
import Morebtn from "../morebtn/Morebtn";

function Moviecardlist({movies, favoriteMovies, cardQuantity, checkBox}) {
const [elementOnPage, setElementOnPage] = useState(12);
const [moreBtnVision, setMoreBtnVision] = useState();
const [moreElement, setMoreElement] = useState(12);
const [renderMovies, setRenderMovies] = useState([]);

useEffect(() => {
    const shortMovies = movies.filter((film) => film.duration < 40);
    checkBox ? setRenderMovies(shortMovies) : setRenderMovies(movies);
 }, [movies, checkBox]);


useEffect(() => {
    if(cardQuantity >= 1210) {
        setElementOnPage(12);
        setMoreElement(3)
        renderMovies.length > 12 ? setMoreBtnVision(true) : setMoreBtnVision(false);
    } else if(cardQuantity >= 737 && cardQuantity < 1210) {
        setElementOnPage(8);
        setMoreElement(2)
        renderMovies.length > 8 ? setMoreBtnVision(true) : setMoreBtnVision(false);
    } else if (cardQuantity < 737) {
        setElementOnPage(5);
        setMoreElement(2)
        renderMovies.length > 5 ? setMoreBtnVision(true) : setMoreBtnVision(false);
    }
},[cardQuantity, renderMovies.length]);

useEffect(() => {
    renderMovies.length === elementOnPage ? setMoreBtnVision(false) : setMoreBtnVision(true);
    elementOnPage > renderMovies.length ? setMoreBtnVision(false) : setMoreBtnVision(true);
}, [renderMovies.length, elementOnPage]);


function getMoreFilms() {
    setElementOnPage(elementOnPage + moreElement);
};



    return (
    <>
        <section className="moviecardlist">
        {renderMovies.slice(0, elementOnPage).map((movie) => {
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