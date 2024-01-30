import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import savedIcon from "../../images/saved-icon.svg";
import removeBtn from "../../images/remove-card-btn.svg";

function Moviecard({link, title, favoriteMovies}) {
    const location = useLocation();
    const [initBtn, setInitSaveBtn] = useState(false);
    const checkLocation = location.pathname === '/movies' ? true : false;
    const time = new Date();
    const hours = time.getHours();
    const minutes = time.getMinutes();

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
                {initBtn && checkLocation && <button className="moviecard__add">Сохранить</button>}
                {initBtn && !checkLocation && <button className="moviecard__remove"/>}
                <img src={link} 
                className="moviecard__img" alt={title}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                >
                </img>
                <figcaption className="moviecard__description">
                    <p className="moviecard__name">{title}</p>
                    <p className="moviecard__duration">{`${hours}ч ${minutes}м`}</p>
                </figcaption>
            </figure>
        </article>
    )
}

export default Moviecard;