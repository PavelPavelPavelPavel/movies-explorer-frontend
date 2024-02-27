import { useState, useEffect } from "react";
import Moviecard from "../moviecard/Moviecard";
import { useLocation } from "react-router-dom";

function Savedmovies({
	savedMovies,
	searchedMovies,
	checkBox,
	searchValue,
	shortMovies,
	onDeleteFilm,
	getDifference,
}) {
	const location = useLocation();
	const [renderMovies, setRenderMovies] = useState([]);

	useEffect(() => {
		checkBox ? setRenderMovies(shortMovies) : setRenderMovies(savedMovies);
	}, [savedMovies, checkBox, shortMovies]);

	useEffect(() => {
		if (
			searchedMovies.length > 0 &&
			location.pathname === "/saved-movies"
		) {
			setRenderMovies(searchedMovies);
		}
	}, [searchedMovies, savedMovies, location.pathname, searchValue.length]);

	return (
		<section className='savedmovies'>
			{renderMovies.map((movie) => {
				// console.log(movie);
				return (
					<Moviecard
						key={movie._id}
						id={movie.id}
						filmId={movie._id}
						filmImage={movie.image.slice(29)}
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
