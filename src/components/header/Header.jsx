import { useState, useEffect } from "react";
import  useResize  from "../../utils/ResizeWidth";
import Navbar from "../navbar/Navbar";
import NavigatePopup from "../navigatepopup/Navigatepopup";
import logo from "../../images/logo.svg";
import profile from "../../images/profile.svg";
import dropListIcon from "../../images/droplist-icon.svg";



function Header({login}) {
    const resize = useResize();
    const [modalState, setModalState] = useState(false);
    const [btnDropList, setBtnDropList] = useState(false);
   
    useEffect(() => {
      if (resize.isScreenLg) {
        setBtnDropList(false)
        setModalState(false)
      } else {
        setBtnDropList(true)
      }
    }, [resize.isScreenLg]);

    function initModalNavbar() {
        modalState ? setModalState(false) : setModalState(true);
    }
    
    return (
    <header className="header">
      <button className="logo__btn logo__btn_place_header">
        <img src={logo} alt="Лого" className="logo logo_place_header"></img>
      </button> 
      { ( btnDropList && !modalState && login) && 
      <img src={dropListIcon} alt="три полоски" onClick={initModalNavbar} className="header__droplist"></img>
      } 
       {(!btnDropList &&  login) && <Navbar/>}
       {modalState && <NavigatePopup initModalNavbar={initModalNavbar}/>}
      { !login &&
        <button  className="header__btn header__btn-reg">Регистрация</button>
        } 
      { !login &&
        <button  className="header__btn header__btn-login">Войти</button> 
        }
     {(!btnDropList && login) && <button className="header__btn header__btn-acc header__btn-acc_place_header"> 
        <img src ={profile} className="header__btn header__btn-auth" alt="Информация аккаунта"></img> 
      </button> }
      {/* <p className="header__greeting-text">{welcomeGreeting}</p> */}
    </header>
    );
  }

  export default Header;