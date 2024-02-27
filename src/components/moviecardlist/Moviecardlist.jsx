import { useState, useEffect } from "react";
import Moviecard from "../moviecard/Moviecard";
import Morebtn from "../morebtn/Morebtn";
import {
	zero,
	two,
	three,
	five,
	eight,
	twelve,
	middleWidth,
	largeWidth,
} from "../../constants/numbers";

function Moviecardlist({
	movies,
	shortMovies,
	cardQuantity,
	checkBox,
	onAddToFavorite,
	getDifference,
	onDeleteFilm,
	savedMovies,
}) {
	const [elementOnPage, setElementOnPage] = useState(twelve);
	const [moreBtnVision, setMoreBtnVision] = useState();
	const [moreElement, setMoreElement] = useState(twelve);
	const [renderMovies, setRenderMovies] = useState([]);

	useEffect(() => {
		checkBox ? setRenderMovies(shortMovies) : setRenderMovies(movies);
	}, [movies, shortMovies, checkBox]);

	useEffect(() => {
		if (cardQuantity >= largeWidth) {
			setElementOnPage(twelve);
			setMoreElement(three);
			renderMovies.length > twelve
				? setMoreBtnVision(true)
				: setMoreBtnVision(false);
		} else if (cardQuantity >= middleWidth && cardQuantity < largeWidth) {
			setElementOnPage(eight);
			setMoreElement(two);
			renderMovies.length > eight
				? setMoreBtnVision(true)
				: setMoreBtnVision(false);
		} else if (cardQuantity < middleWidth) {
			setElementOnPage(five);
			setMoreElement(two);
			renderMovies.length > five
				? setMoreBtnVision(true)
				: setMoreBtnVision(false);
		}
	}, [cardQuantity, renderMovies.length]);

	useEffect(() => {
		renderMovies.length === elementOnPage
			? setMoreBtnVision(false)
			: setMoreBtnVision(true);
		elementOnPage >= renderMovies.length
			? setMoreBtnVision(false)
			: setMoreBtnVision(true);
	}, [renderMovies.length, elementOnPage]);

	function getMoreFilms() {
		setElementOnPage(elementOnPage + moreElement);
	}

	return (
		<>
			<section className='moviecardlist'>
				{renderMovies.slice(zero, elementOnPage).map((movie) => {
					return (
						<Moviecard
							key={movie.id}
							id={movie.id}
							filmId={movie._id}
							filmImage={movie.image.url}
							title={movie.nameRU}
							isLiked={movie.isLiked}
							duration={movie.duration}
							trailerLink={movie.trailerLink}
							onAddToFavorite={onAddToFavorite}
							getDifference={getDifference}
							onDeleteFilm={onDeleteFilm}
							savedMovies={savedMovies}
						/>
					);
				})}
			</section>
			{moreBtnVision && <Morebtn getMoreFilms={getMoreFilms} />}
		</>
	);
}

export default Moviecardlist;
