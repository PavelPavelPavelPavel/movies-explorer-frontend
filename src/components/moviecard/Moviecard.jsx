import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import savedIcon from "../../images/saved-icon.svg";
import removeBtn from "../../images/remove-card-btn.svg";

function Moviecard({link, title }) {
    const location = useLocation();
    const checkLocation = location.pathname === '/movies' ? true : false;

 
    return (
        <article className="moviecard">
                { checkLocation && <button className="moviecard__add">Сохранить</button>}
                {/* <img src={savedIcon} className="moviecard__added-icon" alt="Галка в розовом кругев"/> */}
                {!checkLocation && <button className="moviecard__remove"/>}
            <figure className="moviecard__wrapper">
                <img src={link} 
                className="moviecard__img" alt={title}
                >
                </img>
                <figcaption className="moviecard__description">
                    <p className="moviecard__name">{title}</p>
                    <p className="moviecard__duration">1ч 17м</p>
                </figcaption>
            </figure>
        </article>
    )
}

export default Moviecard;