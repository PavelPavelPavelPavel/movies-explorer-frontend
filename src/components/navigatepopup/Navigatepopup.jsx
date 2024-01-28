import closeBtn from '../../images/close-btn.svg';
import profile from '../../images/profile.svg';
function NavigatePopup({ initModalNavbar, placeAccBtn}) {
   
    function closeNavbar() {
        initModalNavbar();
    }
    
    return (
        <section className='navigatepopup__wrapper'>
        <div className="navigatepopup__veil" />
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
        <button className="header__btn header__btn-acc header__btn-acc_place_droplist"> 
        <img src ={profile} className="header__btn header__btn-auth" alt="Информация аккаунта"></img> 
      </button> 
        </nav>
      </section>
    );
  }
  
  export default NavigatePopup;