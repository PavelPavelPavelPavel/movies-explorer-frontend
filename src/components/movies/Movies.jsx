import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import Searchform from "../searchform/Searchform";
import Moviecardlist from "../moviecardlist/Moviecardlist";
import Savedmovies from "../savedmovies/Savedmovies";
import FilmError from "../filmerror/Filmerror";
import { searchResultError } from "../../constants/errorText/searchError";
import { haveNotSavedMovies } from "../../constants/errorText/searchError";
import {
	shortFilmDuration,
	freeStateInput,
	minimalArrLength,
} from "../../constants/variable";

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
	const [savedSearchValue, setSavedSearchValue] = useState("");
	const [text, setText] = useState("");
	const [shortMovies, setShortMovies] = useState([]);
	const [savedShortMovies, setSavedShortMovies] = useState([]);

	useEffect(() => {
		const resShortMovies = movies.filter(
			(film) => film.duration < shortFilmDuration
		);
		checkBox ? setShortMovies(resShortMovies) : setShortMovies([]);
	}, [movies, checkBox]);

	useEffect(() => {
		const resShortMovies = savedMovies.filter(
			(film) => film.duration < shortFilmDuration
		);
		checkBox
			? setSavedShortMovies(resShortMovies)
			: setSavedShortMovies([]);
	}, [savedMovies, checkBox]);

	useEffect(() => {
		if (
			location.pathname === "/movies" &&
			searchValue.length === freeStateInput &&
			movies.length >= minimalArrLength
		) {
			setText(searchResultError);
			setMoviesPresence(false);
		} else if (
			location.pathname === "/movies" &&
			searchValue.length > freeStateInput &&
			movies.length === minimalArrLength
		) {
			setText(searchResultError);
			setMoviesPresence(false);
		} else if (
			location.pathname === "/movies" &&
			checkBox &&
			shortMovies.length === minimalArrLength
		) {
			setText(searchResultError);
			setMoviesPresence(false);
		} else if (
			location.pathname === "/movies" &&
			searchValue.length > freeStateInput &&
			movies.length >= minimalArrLength
		) {
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
			checkBox &&
			savedShortMovies.length === minimalArrLength
		) {
			setText(searchResultError);
			setMoviesPresence(false);
		} else if (
			location.pathname === "/saved-movies" &&
			savedMovies.length > minimalArrLength &&
			savedSearchValue.length > freeStateInput &&
			searchedMovies.length === minimalArrLength
		) {
			setText(searchResultError);
			setMoviesPresence(false);
		} else if (
			location.pathname === "/saved-movies" &&
			savedMovies.length > minimalArrLength
		) {
			setMoviesPresence(true);
		}
	}, [
		savedMovies.length,
		location.pathname,
		savedSearchValue,
		checkBox,
		searchedMovies,
		savedShortMovies.length,
	]);

	function getShortFilms(checked) {
		setCheckBox(checked);
	}

	function getInputValue(value) {
		setSearchValue(value);
	}

	function getSavedInputValue(value) {
		setSavedSearchValue(value);
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
				getSavedInputValue={getSavedInputValue}
			/>
			{location.pathname === "/saved-movies"
				? moviesPresence && (
						<Savedmovies
							searchValue={searchValue}
							savedMovies={savedMovies}
							searchedMovies={searchedMovies}
							savedShortMovies={savedShortMovies}
							onDeleteFilm={onDeleteFilm}
							checkBox={checkBox}
						/>
				  )
				: !moviesPresence && <FilmError text={text} />}
			{location.pathname === "/movies"
				? moviesPresence && (
						<Moviecardlist
							movies={movies}
							savedMovies={savedMovies}
							shortMovies={shortMovies}
							cardQuantity={cardQuantity}
							checkBox={checkBox}
							onAddToFavorite={onAddToFavorite}
							onDeleteFilm={onDeleteFilm}
						/>
				  )
				: !moviesPresence && <FilmError text={text} />}
		</div>
	);
}

export default Movies;
