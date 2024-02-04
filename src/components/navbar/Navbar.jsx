

function Navbar({navToFilms, navToSavedFilms, modalState}) {

const btnStyle = modalState ? 'navbar__item-btn_place_droplist' : 'navbar__item-btn_place_header';
const listStyle = modalState ? 'navbar_place_droplist' : 'navbar_place_header';
console.log(modalState);
function handleClickFilms() {
  navToFilms();
}
   
function handleClickSavedFilms() {
  navToSavedFilms();
}


   
    return (
      <nav className="navbar__wrapper">
          <ul className={`navbar ${listStyle}`}>
          {modalState && <li className="navbar__item">
                        <button className={`navbar__item-btn ${btnStyle}`} >Главная</button>
                    </li>}
            <li className="navbar__item">
                <button onClick={handleClickFilms} className={`navbar__item-btn ${btnStyle}`}>Фильмы</button>
            </li>
            <li className="navbar__item">
                <button onClick={handleClickSavedFilms} className={`navbar__item-btn ${btnStyle}`}>Сохранённые&nbsp;фильмы</button>
            </li>
          </ul>
      </nav>
    );
  }
  
  export default Navbar;