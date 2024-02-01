function Navbar({navToFilms, navToSavedFilms}) {

function handleClickFilms() {
  navToFilms();
}
   
function handleClickSavedFilms() {
  navToSavedFilms();
}
   
    return (
      <nav>
          <ul className="navbar">
            <li className="navbar__item">
                <button onClick={handleClickFilms} className="navbar__item-btn">Фильмы</button>
            </li>
            <li className="navbar__item">
                <button onClick={handleClickSavedFilms} className="navbar__item-btn">Сохранённые фильмы</button>
            </li>
          </ul>
      </nav>
    );
  }
  
  export default Navbar;