import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import saveIcon from "../../images/saved-icon.svg";
import removeBtn from "../../images/remove-card-btn.svg";

function Moviecard({filmImage, title, duration, trailerLink, onAddToFavorite, id, filmId, onDeleteFilm}) {
    const location = useLocation();
    const [initSaveBtn, setInitSaveBtn] = useState(false);
    const [locMovie, setLocMovie] = useState(true);
    const [savedIcon, setSavedIcon] = useState(false);
    const [deleteBtn, setDeleteBtn] = useState(false);
    const hours = Math.floor(duration/60);
    const minutes = Math.floor(duration % 60);
    const urlApi = 'https://api.nomoreparties.co/.';
    const renderHours = hours > 0 ? `${hours}ч` : '';
    

    useEffect(() => {    
        if(location.pathname === '/movies') {
            setLocMovie(true)
        } else {
            setLocMovie(false)
        }
    }, [location.pathname]);

    // useEffect(() => {    
    //     const difference = getDifference();
    //     if (difference.includes(id)) {
    //          setInitSaveBtn(false);
    //          setSavedIcon(true);
    //     }
    // }, [ getDifference, id]);


    
    function handleAddToFavorite() {
        setSavedIcon(true);
        onAddToFavorite(id, urlApi);
    }

    
    function handleDeleteCard() {
        onDeleteFilm(filmId)
    }

    function handleMouseEnter () {
        setInitSaveBtn(true)
        setDeleteBtn(true)
    }
    
    function handleMouseLeave () { 
        setInitSaveBtn(false)
        setDeleteBtn(false)
    }

    return (
        <article className="moviecard">
            <figure className="moviecard__wrapper">
            { locMovie && savedIcon && <img src={saveIcon} className="moviecard__added-icon"  alt="Галка в розовом кругев"/>} 
                {locMovie && initSaveBtn && !savedIcon && <button className="moviecard__add"
                 onMouseEnter={handleMouseEnter}
                 onMouseLeave={handleMouseLeave}
                 onClick={handleAddToFavorite}
                >Сохранить</button>}
                {!locMovie && initSaveBtn && deleteBtn && <button 
                className="moviecard__remove"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                onClick={handleDeleteCard}
                />}
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
                    <p className="moviecard__duration">{`${ renderHours} ${minutes}м`}</p>
                </figcaption>
            </figure>
        </article>
    )
}

export default Moviecard;