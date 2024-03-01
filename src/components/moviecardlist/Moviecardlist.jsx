import { useState, useEffect } from "react";
import Moviecard from "../moviecard/Moviecard";
import Morebtn from "../morebtn/Morebtn";
import {
	highScreenElementQuantity,
	lowScreenElementQuantity,
	mediumScreenElementQuantity,
	slicedPositionElement,
	highScreenMoreElement,
	lowScreenMoreElement,
	middleWidth,
	largeWidth,
} from "../../constants/variable";

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
	const [elementOnPage, setElementOnPage] = useState(
		highScreenElementQuantity
	);
	const [moreBtnVision, setMoreBtnVision] = useState();
	const [moreElement, setMoreElement] = useState(highScreenElementQuantity);
	const [renderMovies, setRenderMovies] = useState([]);

	useEffect(() => {
		checkBox ? setRenderMovies(shortMovies) : setRenderMovies(movies);
	}, [movies, shortMovies, checkBox]);

	useEffect(() => {
		if (cardQuantity >= largeWidth) {
			setElementOnPage(highScreenElementQuantity);
			setMoreElement(highScreenMoreElement);
			renderMovies.length > highScreenElementQuantity
				? setMoreBtnVision(true)
				: setMoreBtnVision(false);
		} else if (cardQuantity >= middleWidth && cardQuantity < largeWidth) {
			setElementOnPage(mediumScreenElementQuantity);
			setMoreElement(lowScreenMoreElement);
			renderMovies.length > mediumScreenElementQuantity
				? setMoreBtnVision(true)
				: setMoreBtnVision(false);
		} else if (cardQuantity < middleWidth) {
			setElementOnPage(lowScreenElementQuantity);
			setMoreElement(lowScreenMoreElement);
			renderMovies.length > lowScreenElementQuantity
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
				{renderMovies
					.slice(slicedPositionElement, elementOnPage)
					.map((movie) => {
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
