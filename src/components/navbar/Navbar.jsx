import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

function Navbar({navToFilms, navToSavedFilms, modalState, navToMain}) {

const location = useLocation();
const [btnCheckedMain, setBtnCheckedMain] = useState('');
const [btnCheckedMovies, setBtnCheckedMovies] = useState('');
const [btnCheckedSavedMovies, setBtnCheckedSavedMovies] = useState('');
const btnStyle = modalState ? 'navbar__item-btn_place_droplist' : 'navbar__item-btn_place_header';
const listStyle = modalState ? 'navbar_place_droplist' : 'navbar_place_header';

useEffect(() => {
  location.pathname === '/' ? setBtnCheckedMain('navbar__item-btn-checked') : setBtnCheckedMain('');
  location.pathname === '/movies' ? setBtnCheckedMovies('navbar__item-btn-checked') : setBtnCheckedMovies('');
  location.pathname === '/saved-movies' ? setBtnCheckedSavedMovies('navbar__item-btn-checked') : setBtnCheckedSavedMovies('');
}, [location.pathname]);


function handleClickFilms() {
  navToFilms();
}
   
function handleClickSavedFilms() {
  navToSavedFilms();
}

function handleClickMain() {
  navToMain();
}


    return (
      <nav className="navbar__wrapper">
          <ul className={`navbar ${listStyle}`}>
          {modalState && <li className="navbar__item">
                        <button onClick={handleClickMain} className={`navbar__item-btn ${btnStyle} ${btnCheckedMain}`} >Главная</button>
                    </li>}
            <li className="navbar__item">
                <button onClick={handleClickFilms} className={`navbar__item-btn ${btnStyle} ${btnCheckedMovies}`}>Фильмы</button>
            </li>
            <li className="navbar__item">
                <button onClick={handleClickSavedFilms} className={`navbar__item-btn ${btnStyle}  ${btnCheckedSavedMovies}`}>Сохранённые&nbsp;фильмы</button>
            </li>
          </ul>
      </nav>
    );
  }
  
  export default Navbar;