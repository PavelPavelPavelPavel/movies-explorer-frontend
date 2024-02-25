import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import Searchform from "../searchform/Searchform";
import Moviecardlist from "../moviecardlist/Moviecardlist";
import Savedmovies from "../savedmovies/Savedmovies";
import FilmError from "../filmerror/Filmerror";
import { searchResultError } from "../../constants/errorText/searchError";
import { haveNotSavedMovies } from "../../constants/errorText/searchError";

function Movies({
	movies,
	savedMovies,
	cardQuantity,
	getFilms,
	onSavedSearch,
	onAddToFavorite,
	onDeleteFilm,
}) {
	const location = useLocation();
	const [checkBox, setCheckBox] = useState(false);
	const [moviesPresence, setMoviesPresence] = useState(true);
	const [searchValue, setSearchValue] = useState("");
	const [text, setText] = useState("");

	useEffect(() => {
		if (location.pathname === "/movies") {
			setText(searchResultError);
			movies.length > 0 && searchValue.length > 0
				? setMoviesPresence(true)
				: setMoviesPresence(false);
		}
	}, [movies.length, location.pathname, searchValue.length]);

	useEffect(() => {
		if (location.pathname === "/saved-movies") {
			savedMovies.length === 0
				? setText(haveNotSavedMovies)
				: setText(searchResultError);
			savedMovies.length > 0
				? setMoviesPresence(true)
				: setMoviesPresence(false);
		}
	}, [savedMovies.length, location.pathname, searchValue.length]);

	function getShortFilms(checked) {
		setCheckBox(checked);
	}

	function getInputValue(value) {
		setSearchValue(value);
	}

	return (
		<div className='movies'>
			<Searchform
				getShortFilms={getShortFilms}
				getFilms={getFilms}
				movies={movies}
				savedMovies={savedMovies}
				onSavedSearch={onSavedSearch}
				getInputValue={getInputValue}
			/>
			{location.pathname === "/saved-movies"
				? moviesPresence && (
						<Savedmovies
							movies={movies}
							savedMovies={savedMovies}
							onDeleteFilm={onDeleteFilm}
							checkBox={checkBox}
						/>
				  )
				: !moviesPresence && <FilmError text={text} />}
			{location.pathname === "/movies"
				? moviesPresence && (
						<Moviecardlist
							movies={movies}
							cardQuantity={cardQuantity}
							checkBox={checkBox}
							onAddToFavorite={onAddToFavorite}
						/>
				  )
				: !moviesPresence && <FilmError text={text} />}
		</div>
	);
}

export default Movies;
