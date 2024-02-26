import { useState, useEffect } from "react";
import Moviecard from "../moviecard/Moviecard";
import Morebtn from "../morebtn/Morebtn";
import { get } from "react-hook-form";
import { shortMovies } from "../../constants/words";

function Moviecardlist({
	movies,
	shortMovies,
	cardQuantity,
	checkBox,
	onAddToFavorite,
	getDifference,
}) {
	const [elementOnPage, setElementOnPage] = useState(12);
	const [moreBtnVision, setMoreBtnVision] = useState();
	const [moreElement, setMoreElement] = useState(12);
	const [renderMovies, setRenderMovies] = useState([]);

	useEffect(() => {
		checkBox ? setRenderMovies(shortMovies) : setRenderMovies(movies);
	}, [movies, shortMovies, checkBox]);

	useEffect(() => {
		if (cardQuantity >= 1210) {
			setElementOnPage(12);
			setMoreElement(3);
			renderMovies.length > 12
				? setMoreBtnVision(true)
				: setMoreBtnVision(false);
		} else if (cardQuantity >= 737 && cardQuantity < 1210) {
			setElementOnPage(8);
			setMoreElement(2);
			renderMovies.length > 8
				? setMoreBtnVision(true)
				: setMoreBtnVision(false);
		} else if (cardQuantity < 737) {
			setElementOnPage(5);
			setMoreElement(2);
			renderMovies.length > 5
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
				{renderMovies.slice(0, elementOnPage).map((movie) => {
					return (
						<Moviecard
							key={movie.id}
							id={movie.id}
							filmImage={movie.image.url}
							title={movie.nameRU}
							isLiked={movie.isLiked}
							duration={movie.duration}
							trailerLink={movie.trailerLink}
							onAddToFavorite={onAddToFavorite}
							getDifference={getDifference}
						/>
					);
				})}
			</section>
			{moreBtnVision && <Morebtn getMoreFilms={getMoreFilms} />}
		</>
	);
}

export default Moviecardlist;
