import React from "react";
import { useState, useEffect } from "react";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import { ProtectedRoute } from "./components/protectedroute/ProtectedRoute";
import { CurrentUserContext } from "./contexts/CurrentUserContext";
import useResize from "../src/utils/ResizeWidth";
import "./index.css";
import Header from "./components/header/Header";
import Main from "./components/main-landing/Main";
import Footer from "./components/footer/Footer";
import Notfounderr from "./components/notfounderr/Notfounderr";
import Movies from "./components/movies/Movies";
import Profile from "./components/profile/Profile";
import Register from "./components/register/Register";
import Preloader from "./components/preloader/Preloader";
import Login from "./components/login/Login";
import movieApi from "./utils/MovieApi";
import auth from "./utils/Auth";
import mainApi from "./utils/MainApi";
import InfoPopup from "./components/infopopup/Infopopup";
import { wrongLogOrPass } from "./constants/errorText/loginErrorText";
import { registerError } from "./constants/errorText/registerErrorText";
import { profileUpdateError } from "./constants/errorText/profileErrorText";

function App() {
	const resize = useResize();
	const location = useLocation();
	const navigate = useNavigate();
	const [loggedIn, setLoggedIn] = useState(
		JSON.parse(localStorage.getItem("loggedIn") || false)
	);
	const [currentUser, setCurrentUser] = useState({ name: "", email: "" });
	const [movies, setMovies] = useState([]);
	const [savedMovies, setSavedMovies] = useState([]);
	const [searchedMovies, setSearchedMovies] = useState([]);
	const [loc, setLoc] = useState(false);
	const [greetingText, setGreetingText] = useState("");
	const [modalState, setModalState] = useState(false);
	const [btnDropList, setBtnDropList] = useState(false);
	const [cardQuantity, setCardQuantity] = useState();
	const [popupStatus, setPopupStatus] = useState(false);
	const [preloaderStatus, setPreloaderStatus] = useState(false);
	const [errorText, setErrorText] = useState("");

	useEffect(() => {
		const jwt = localStorage.getItem("jwt");
		if (jwt && !null) {
			localStorage.setItem("loggedIn", true);
			setLoggedIn(true);
			setErrorText("");
		} else {
			setLoggedIn(false);
			setErrorText("");
		}
	}, []);

	useEffect(() => {
		const loc = location.pathname;
		if (loggedIn && loc === "/signin") {
			navigate("/");
		} else if (loggedIn && loc === "/signup") {
			navigate("/");
		}

		if (loc === "/signin") {
			setLoc(true);
			setGreetingText("Рады видеть!");
			setErrorText("");
		} else if (loc === "/signup") {
			setLoc(true);
			setGreetingText("Добро пожаловать!");
			setErrorText("");
		} else if (loc === "/profile") {
			setErrorText("");
		} else {
			setLoc(false);
		}
	}, [loggedIn, location.pathname, navigate]);

	useEffect(() => {
		if (loggedIn) {
			setErrorText("");
			Promise.all([mainApi.getInfo(), mainApi.getSavedFilms()])
				.then(([user, films]) => {
					setCurrentUser(user);
					setSavedMovies(films);
				})
				.catch((err) => console.log(err));
		}
	}, [loggedIn]);

	useEffect(() => {
		if (location.pathname === "/movies") {
			setSearchedMovies([]);
			const updatedMovies = movies;
			if (savedMovies.length === 0) {
				return updatedMovies.forEach((item) => (item.isLiked = false));
			}
			updatedMovies.filter((mov) => {
				return savedMovies.some((likedMov) => {
					if (likedMov.movieId === mov.id) {
						return (mov.isLiked = true);
					} else {
						return (mov.isLiked = false);
					}
				});
			});
			setMovies(updatedMovies);
		}
	}, [location.pathname, savedMovies, movies]);

	useEffect(() => {
		if (location.pathname === "/saved-movies") {
			setPreloaderStatus(true);
			mainApi
				.getSavedFilms()
				.then((films) => {
					setSavedMovies(films);
					setPreloaderStatus(false);
				})
				.catch((err) => console.log(err));
		}
	}, [location.pathname]);

	useEffect(() => {
		if (resize.isScreenLg) {
			setBtnDropList(false);
			setModalState(false);
		} else {
			setBtnDropList(true);
		}
		setCardQuantity(resize.width);
	}, [resize]);

	function findFilm(arr, value) {
		const movies = [];
		arr.filter((film) => {
			if (
				film.nameRU
					.trim()
					.toLowerCase()
					.includes(value.toLowerCase().trim())
			) {
				movies.push(film);
			} else if (
				film.nameEN
					.trim()
					.toLowerCase()
					.includes(value.toLowerCase().trim())
			) {
				movies.push(film);
			} else if (film.year === value) {
				movies.push(film);
			}
		});
		return movies;
	}

	function getFilms(inputValue) {
		if (inputValue.length > 0) {
			setPreloaderStatus(true);
			movieApi
				.getFilms()
				.then((movies) => {
					const addLikeFieldToMovies = movies.map((movie) => {
						movie.isLiked = false;
						movie._id = "";
						return movie;
					});
					addLikeFieldToMovies.map((mov) => {
						savedMovies.some((likedMov) => {
							if (likedMov.movieId === mov.id) {
								return (mov._id = likedMov._id);
							}
						});
					});
					addLikeFieldToMovies.filter((mov) => {
						return savedMovies.some((likedMov) => {
							if (likedMov.movieId === mov.id) {
								return (mov.isLiked = true);
							}
						});
					});
					const res = findFilm(addLikeFieldToMovies, inputValue);
					setMovies(res);
					setPreloaderStatus(false);
				})
				.catch((err) => {
					console.log(err);
				})
				.finally(() => setPreloaderStatus(false));
		}
	}

	function onSavedSearch(inputValue) {
		setPreloaderStatus(true);
		mainApi.getSavedFilms().then((films) => {
			const res = findFilm(films, inputValue);
			setSearchedMovies(res);
			setPreloaderStatus(false);
		});
	}

	function onAddToFavorite(filmId, urlApi) {
		setPreloaderStatus(true);
		movies.filter((film) => {
			if (film.id === filmId) {
				const {
					country,
					director,
					duration,
					year,
					description,
					image,
					trailerLink,
					nameRU,
					nameEN,
					owner,
					id,
				} = film;
				mainApi
					.addToFavorite({
						country,
						director,
						duration,
						year,
						description,
						image: `${urlApi}${image.url}`,
						trailerLink,
						nameRU,
						nameEN,
						thumbnail: `${urlApi}${image.url}`,
						owner,
						movieId: id,
						isLiked: true,
					})
					.then((res) => {
						const addedCard = [];
						addedCard.push(res);
						setSavedMovies(addedCard);
						const likedMovies = movies;
						likedMovies.map((mov) => {
							addedCard.some((likedMov) => {
								if (likedMov.movieId === mov.id) {
									return (mov._id = likedMov._id);
								}
							});
						});
						likedMovies.filter((mov) => {
							return addedCard.some((likedMov) => {
								if (likedMov.movieId === mov.id) {
									return (mov.isLiked = true);
								}
							});
						});
						setMovies(likedMovies);
						setPreloaderStatus(false);
					})
					.catch((err) => {
						console.log(err);
					})
					.finally(setPreloaderStatus(false));
			}
		});
	}

	function onDeleteFilm(filmId) {
		setPreloaderStatus(true);
		const updatedMovies = savedMovies;
		updatedMovies.filter((film) => {
			if (film._id === filmId) {
				mainApi.deleteFilm(filmId).then(() => {
					mainApi.getSavedFilms().then((res) => {
						res.forEach((item) => {
							return (item.isLiked = false);
						});
						setSavedMovies(res);
						setPreloaderStatus(false);
					});
				});
			}
		});
	}

	function onClosePopup() {
		setPopupStatus(false);
	}

	function onUserRegister({ name, email, password }) {
		setPreloaderStatus(true);
		auth.authentication(name, email, password)
			.then((res) => {
				setCurrentUser({
					name: res.name,
					email: res.email,
				});
				auth.authorization(email, password).then((res) => {
					setPreloaderStatus(false);
					localStorage.setItem("jwt", res.token);
					setLoggedIn(true);
					navigate("/movies");
				});
			})
			.catch((err) => {
				setErrorText(registerError);
				console.log(err);
			})
			.finally(() => setPreloaderStatus(false));
	}

	function onLogin({ email, password }) {
		setPreloaderStatus(true);
		auth.authorization(email, password)
			.then((res) => {
				localStorage.setItem("jwt", res.token);
				setPreloaderStatus(false);
				setLoggedIn(true);
				navigate("/movies");
			})
			.catch((err) => {
				setErrorText(wrongLogOrPass);
				console.log(err);
			})
			.finally(() => setPreloaderStatus(false));
	}

	function updateUserInfo({ name, email }) {
		setPreloaderStatus(true);
		mainApi
			.updateInfo(name, email)
			.then((res) => {
				setCurrentUser({
					name: res.name,
					email: res.email,
				});
				setPreloaderStatus(false);
				setPopupStatus(true);
			})
			.catch((err) => {
				console.error(err);
				setErrorText(profileUpdateError);
			})
			.finally(() => setPreloaderStatus(false));
	}

	function initModalNavbar() {
		modalState ? setModalState(false) : setModalState(true);
	}

	function logOut() {
		localStorage.clear();
		setCurrentUser({
			name: "",
			email: "",
		});
		setMovies([]);
		setSavedMovies([]);
		navigate("/");
		setLoggedIn(false);
	}

	return (
		<>
			<CurrentUserContext.Provider
				value={{
					currentUser,
				}}>
				<div className='App'>
					<Header
						login={loggedIn}
						loc={loc}
						greetingText={greetingText}
						modalState={modalState}
						btnDropList={btnDropList}
						initModalNavbar={initModalNavbar}
					/>
					<div className='main'>
						<Routes>
							<Route
								path='/'
								element={
									<>
										<Main />
									</>
								}
							/>
							<Route
								path='/signup'
								element={
									<Register
										onUserRegister={onUserRegister}
										errorText={errorText}
									/>
								}
							/>
							<Route
								path='/signin'
								element={
									<Login
										onLogin={onLogin}
										errorText={errorText}
									/>
								}
							/>
							<Route
								path='/movies'
								element={
									<ProtectedRoute loggedIn={loggedIn}>
										<Movies
											movies={movies}
											savedMovies={savedMovies}
											cardQuantity={cardQuantity}
											onDeleteFilm={onDeleteFilm}
											getFilms={getFilms}
											onAddToFavorite={onAddToFavorite}
										/>
									</ProtectedRoute>
								}
							/>
							<Route
								path='/saved-movies'
								element={
									<ProtectedRoute loggedIn={loggedIn}>
										<Movies
											movies={movies}
											searchedMovies={searchedMovies}
											savedMovies={savedMovies}
											onDeleteFilm={onDeleteFilm}
											onSavedSearch={onSavedSearch}
										/>
									</ProtectedRoute>
								}
							/>
							<Route
								path='/profile'
								element={
									<ProtectedRoute loggedIn={loggedIn}>
										<Profile
											logOut={logOut}
											updateUserInfo={updateUserInfo}
											errorText={errorText}
										/>
									</ProtectedRoute>
								}
							/>
							<Route path='*' element={<Notfounderr />} />
						</Routes>
						{popupStatus && (
							<InfoPopup onClosePopup={onClosePopup} />
						)}
						{preloaderStatus && <Preloader />}
					</div>
					{location.pathname !== "/profile" &&
						!loc &&
						!modalState && <Footer />}
				</div>
			</CurrentUserContext.Provider>
		</>
	);
}

export default App;
