import { useState, useEffect } from "react";
import Moviecard from "../moviecard/Moviecard";
import { useLocation } from "react-router-dom";
import { sliceMovieImage, freeStateInput } from "../../constants/variable";

function Savedmovies({
	savedMovies,
	searchedMovies,
	savedShortMovies,
	checkBox,
	onDeleteFilm,
	getDifference,
}) {
	const location = useLocation();
	const [renderMovies, setRenderMovies] = useState([]);

	useEffect(() => {
		checkBox
			? setRenderMovies(savedShortMovies)
			: setRenderMovies(savedMovies);
	}, [savedMovies, savedShortMovies, checkBox]);

	useEffect(() => {
		if (
			searchedMovies.length > freeStateInput &&
			location.pathname === "/saved-movies"
		) {
			setRenderMovies(searchedMovies);
		}
	}, [searchedMovies, location.pathname]);

	return (
		<section className='savedmovies'>
			{renderMovies.map((movie) => {
				return (
					<Moviecard
						key={movie._id}
						id={movie.id}
						filmId={movie._id}
						filmImage={movie.image.slice(sliceMovieImage)}
						title={movie.nameRU}
						duration={movie.duration}
						trailerLink={movie.trailerLink}
						onDeleteFilm={onDeleteFilm}
						getDifference={getDifference}
					/>
				);
			})}
		</section>
	);
}

export default Savedmovies;
