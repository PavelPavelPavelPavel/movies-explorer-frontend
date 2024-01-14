function Navbar() {
    return (
      <nav>
          <ul className="navbar">
            <li className="navbar__item">
                <button className="navbar__item-btn">Фильмы</button>
            </li>
            <li className="navbar__item">
                <button className="navbar__item-btn">Сохранённые фильмы</button>
            </li>
          </ul>
      </nav>
    );
  }
  
  export default Navbar;