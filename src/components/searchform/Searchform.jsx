import btnSubmitImg from "../../images/searchform-btn-submit.svg";
import { useState, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { shortMovies } from "../../constants/words";

function Searchform({
	getShortFilms,
	getFilms,
	onSavedSearch,
	getInputValue,
	getSavedInputValue,
}) {
	const location = useLocation();
	const searchRef = useRef("");
	const [checkBox, setCheckBox] = useState(false);

	useEffect(() => {
		if (location.pathname === "/saved-movies") {
			setCheckBox(false);
			searchRef.current.value = "";
			getSavedInputValue("");
		}
		if (location.pathname === "/movies") {
			setCheckBox(JSON.parse(localStorage.getItem("checkBox")));
			searchRef.current.value = JSON.parse(
				localStorage.getItem("savedSearch")
			);
			getInputValue(searchRef.current.value);
		}
	}, [location.pathname]);

	useEffect(() => {
		getShortFilms(checkBox);
	}, [checkBox, getShortFilms]);

	function handleGetShortFilms({ target: { checked } }) {
		setCheckBox(checked);
		if (location.pathname === "/movies") {
			localStorage.setItem("checkBox", checked);
			localStorage.setItem(
				"savedSearch",
				JSON.stringify(searchRef.current.value)
			);
			getFilms(searchRef.current.value);
		}
	}

	function handleSubmit(e) {
		e.preventDefault();
		if (location.pathname === "/movies") {
			getFilms(searchRef.current.value);
			localStorage.setItem(
				"savedSearch",
				JSON.stringify(searchRef.current.value)
			);
			getInputValue(searchRef.current.value);
		} else if (location.pathname === "/saved-movies") {
			getSavedInputValue(searchRef.current.value);
			onSavedSearch(searchRef.current.value);
		}
	}

	return (
		<>
			<form className='searchform' onSubmit={handleSubmit} noValidate>
				<div className='searchform__wrapper'>
					<input
						className='searchform__input'
						placeholder='Фильм'
						required
						ref={searchRef}
						defaultValue={searchRef.current.value}
					/>
					<span className='searchform__input-error'></span>
					<button type='submit' className='searchform__btn-submit'>
						<img
							src={btnSubmitImg}
							className='searchform__btn-img'
							alt='синий фон и стрелка'></img>
					</button>
				</div>
				<div className='searchform__checkbox-wrapper'>
					<input
						className='searchform__checkbox'
						checked={checkBox}
						onChange={handleGetShortFilms}
						id='filter'
						type='checkbox'
						aria-checked='false'
					/>
					<label
						className='searchform__checkbox-capcha'
						htmlFor='filter'></label>
					<span className='searchform__checkbox-custom'>
						{shortMovies}
					</span>
				</div>
			</form>
		</>
	);
}

export default Searchform;
