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
      navigate('/')
    }

    function navToSigIn() {
      navigate('/signin')
    }

    function navToSigUp() {
      navigate('/signup')
    }

    function navToAcc() {
      navigate('/profile')
    }

    function navToFilm() {
      navigate('/movies')
    }

    function navToSavedFilm() {
      navigate('/saved-movies')
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
       {!btnDropList &&  login && !loc && <Navbar 
                                           navToFilm={navToFilm}
                                           navToSavedFilm={navToSavedFilm}/>}
       {modalState && <NavigatePopup 
                        initModalNavbar={initModalNavbar} 
                        navToAcc={navToAcc}
                        navToFilm={navToFilm}
                        navToSavedFilm={navToSavedFilm}/>}
      { !login && !loc &&
        <button  
        className="header__btn header__btn-reg"
        onClick={navToSigUp}
        >Регистрация
        </button>
        } 
      { !login && !loc  &&
        <button  
        className="header__btn header__btn-login"
        onClick={navToSigIn}
        >Войти
        </button> 
        }
     {!btnDropList && login && !loc && <button className="header__btn header__btn-acc header__btn-acc_place_header"> 
        <img src ={profile} onClick={navToAcc} className="header__btn header__btn-auth" alt="Информация аккаунта"></img> 
      </button> }
      { loc && !login && <p className="header__greeting-text">{greetingText}</p>} 
    </header>
    );
  }

  export default Header;