import savedIcon from "../../images/saved-icon.svg";
import removeBtn from "../../images/remove-card-btn.svg";

function Moviecard({link, title}) {
    return (
        <article className="moviecard">
                {/* <button className="moviecard__add">Сохранить</button> */}
                {/* <img src={savedIcon} className="moviecard__added-icon" alt="Галка в розовом кругев"/> */}
                {/* <button className="moviecard__remove"/> */}
            <figure className="moviecard__wrapper">
                <img src={link} 
                className="moviecard__img" alt={title}>
                </img>
                <figcaption className="moviecard__description">
                    <p className="moviecard__name">{title}</p>
                    <p className="moviecard__duration">2:33:15</p>
                </figcaption>
            </figure>
        </article>
    )
}

export default Moviecard;