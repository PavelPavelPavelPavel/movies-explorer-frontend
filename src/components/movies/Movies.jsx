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
	searchedMovies,
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
	const [shortMovies, setShortMovies] = useState([]);

	useEffect(() => {
		const resShortMovies = movies.filter((film) => film.duration < 40);
		checkBox ? setShortMovies(resShortMovies) : setShortMovies([]);
	}, [movies, checkBox]);

	useEffect(() => {
		if (
			location.pathname === "/movies" &&
			searchValue.length === 0 &&
			movies.length >= 0
		) {
			setText(searchResultError);
			setMoviesPresence(false);
		} else if (
			location.pathname === "/movies" &&
			searchValue.length > 0 &&
			movies.length === 0
		) {
			setText(searchResultError);
			setMoviesPresence(false);
		} else if (
			location.pathname === "/movies" &&
			checkBox &&
			shortMovies.length === 0
		) {
			setText(searchResultError);
			setMoviesPresence(false);
		} else if (
			location.pathname === "/movies" &&
			searchValue.length > 0 &&
			movies.length >= 0
		) {
			// setText(haveNotSavedMovies);
			setMoviesPresence(true);
		}
	}, [
		movies.length,
		location.pathname,
		searchValue.length,
		checkBox,
		shortMovies.length,
	]);

	useEffect(() => {
		if (location.pathname === "/saved-movies" && savedMovies.length === 0) {
			setText(haveNotSavedMovies);
			setMoviesPresence(false);
		} else if (
			location.pathname === "/saved-movies" &&
			savedMovies.length > 0 &&
			searchValue.length > 0 &&
			checkBox
		) {
			setText(searchResultError);
			setMoviesPresence(false);
		} else if (
			location.pathname === "/saved-movies" &&
			shortMovies.length === 0 &&
			checkBox
		) {
			setText(searchResultError);
			setMoviesPresence(false);
		} else if (
			location.pathname === "/saved-movies" &&
			savedMovies.length > 0
		) {
			setMoviesPresence(true);
		}
	}, [
		savedMovies.length,
		location.pathname,
		shortMovies.length,
		checkBox,
		searchValue.length,
	]);

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
							shortMovies={shortMovies}
							searchValue={searchValue}
							savedMovies={savedMovies}
							searchedMovies={searchedMovies}
							onDeleteFilm={onDeleteFilm}
							checkBox={checkBox}
						/>
				  )
				: !moviesPresence && <FilmError text={text} />}
			{location.pathname === "/movies"
				? moviesPresence && (
						<Moviecardlist
							movies={movies}
							shortMovies={shortMovies}
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
