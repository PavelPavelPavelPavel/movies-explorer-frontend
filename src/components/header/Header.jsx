import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import  useResize  from "../../utils/ResizeWidth";
import Navbar from "../navbar/Navbar";
import NavigatePopup from "../navigatepopup/Navigatepopup";
import logo from "../../images/logo.svg";
import profile from "../../images/profile.svg";
import dropListIcon from "../../images/droplist-icon.svg";



function Header({login, loc, greetingText}) {
    const resize = useResize();
    const location = useLocation();
    const navigate = useNavigate();
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
    };

    function navToMain() {
      navigate("/");
    }


    
    return (
    <header className={`${!loc ? 'header' : 'header__greeting'}`}>
      <button className={`logo__btn ${!loc ? 'logo__btn_place_header' : 'logo__btn_place_greeting'}`} 
              onClick={navToMain}>
        <img src={logo} alt="Лого" className="logo"></img>
      </button> 
      { ( btnDropList && !modalState && login) && 
      <img src={dropListIcon} alt="три полоски" onClick={initModalNavbar} className="header__droplist"></img>
      } 
       {!btnDropList &&  login && !loc && <Navbar/>}
       {modalState && <NavigatePopup initModalNavbar={initModalNavbar}/>}
      { !login && !loc &&
        <button  className="header__btn header__btn-reg">Регистрация</button>
        } 
      { !login && !loc  &&
        <button  className="header__btn header__btn-login">Войти</button> 
        }
     {!btnDropList && login && !loc && <button className="header__btn header__btn-acc header__btn-acc_place_header"> 
        <img src ={profile} className="header__btn header__btn-auth" alt="Информация аккаунта"></img> 
      </button> }
      { loc && !login && <p className="header__greeting-text">{greetingText}</p>} 
    </header>
    );
  }

  export default Header;