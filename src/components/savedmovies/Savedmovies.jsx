import { useState } from "react";
import Moviecard from "../moviecard/Moviecard";
import Morebtn from "../morebtn/Morebtn";

function Savedmovies({favoriteMovies, saveMovies}) {
    const [elementOnPage, setElementOnPage] = useState(12);
    

    function getMoreSavedFilms() {
        setElementOnPage(elementOnPage + 6)
    }

 return (
    <>
        <section className="savedmovies">
        {saveMovies.slice(0, elementOnPage).map((movie) => {
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
        { saveMovies.length > 12 && <Morebtn getMoreFilms={getMoreSavedFilms}/>}
    </>
        )
        }

export default Savedmovies;