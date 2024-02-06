import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import savedIcon from "../../images/saved-icon.svg";
import removeBtn from "../../images/remove-card-btn.svg";

function Moviecard({filmImage, title, duration, trailerLink, favoriteMovies}) {
    const location = useLocation();
    const [initSaveBtn, setInitSaveBtn] = useState(false);
    const [locMovie, setLocMovie] = useState(true);
    const hours = Math.floor(duration/60);
    const minutes = Math.floor(duration % 60);
    const urlApi = 'https://api.nomoreparties.co/.';

    useEffect(() => {
        if(location.pathname === '/movies') {
            setLocMovie(true)
        } else {
            setLocMovie(false)
        }
    }, [location.pathname]);

    
    function handleMouseEnter () {
        setInitSaveBtn(true)
    }
    
    function handleMouseLeave  () {
        setInitSaveBtn(false)
    }

    return (
        <article className="moviecard">
            <figure className="moviecard__wrapper">
            {/* <img src={savedIcon} className="moviecard__added-icon"  alt="Галка в розовом кругев"/>  */}
                {locMovie && initSaveBtn && <button className="moviecard__add"
                 onMouseEnter={handleMouseEnter}
                 onMouseLeave={handleMouseLeave}
                >Сохранить</button>}
                {!locMovie && initSaveBtn && <button className="moviecard__remove"/>}
                <a className="movicard__img-wrapper" href={trailerLink} target="blanck">
                <img src={`${urlApi}${filmImage}`} 
                className="moviecard__img" alt="обложка фильма"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                >
                </img>
                </a>
                <figcaption className="moviecard__description">
                    <p className="moviecard__name">{title}</p>
                    <p className="moviecard__duration">{`${hours}ч ${minutes}м`}</p>
                </figcaption>
            </figure>
        </article>
    )
}

export default Moviecard;