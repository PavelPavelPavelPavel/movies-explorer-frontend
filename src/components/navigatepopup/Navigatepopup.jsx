import closeBtn from '../../images/close-btn.svg';

function NavigatePopup({ initModalNavbar}) {
   

    function closeNavbar() {
        initModalNavbar();
    }
   
    
    return (
      <nav className='navigatepopup'>
          <img src={closeBtn} alt='Крест' className='navigate__btn-close' onClick={closeNavbar}/>
          <ul className="navigatepopup__navbar">
            <li className="navbar__item">
                <button className="navbar__item-btn" >Главная</button>
            </li>
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
  
  export default NavigatePopup;