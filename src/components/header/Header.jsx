import { useState } from "react";
import Navbar from "../navbar/Navbar";
import NavigatePopup from "../navigatepopup/Navigatepopup";
import logo from "../../images/logo.svg";
import profile from "../../images/profile.svg";
import dropListIcon from "../../images/droplist-icon.svg"



function Header() {
    const [modalState, setModalState] = useState(false);
    const [btnDropList, setBtnDropList] = useState(true);

    function initModalNavbar() {
        modalState ? setModalState(false) : setModalState(true);
    }
    

    return (
    <header className="header">   
      <img src={logo} alt="Лого" className="header__icon"></img> 
      { ( btnDropList && !modalState ) && 
      <img src={dropListIcon} alt="три полоски" onClick={initModalNavbar} className="header__droplist"></img>
      } 
       {!btnDropList && <Navbar/>}
       {modalState && <NavigatePopup initModalNavbar={initModalNavbar}/>}
      {/* <button  className="header__btn header__btn-reg">Регистрация</button>  
      <button  className="header__btn header__btn-login">Войти</button>   */}
     {!btnDropList && <button className="header__btn header__btn-acc"> 
        <img src ={profile} className="header__btn header__btn-auth" alt="Информация аккаунта"></img> 
      </button> }
      {/* <p className="header__greeting-text">{welcomeGreeting}</p> сосотяние приветсвия + класс на header header__greeting */}
    </header>
    );
  }

  export default Header;