import {  useNavigate } from "react-router-dom";
import Navbar from "../navbar/Navbar";
import NavigatePopup from "../navigatepopup/Navigatepopup";
import logo from "../../images/logo.svg";
import profile from "../../images/profile.svg";
import dropListIcon from "../../images/droplist-icon.svg";
import { register, enter } from "../../constants/words";



function Header({login, loc, greetingText, btnDropList, modalState, initModalNavbar}) {
    const navigate = useNavigate();
    const btnAccStyle = modalState ? '' : 'header__btn-acc_place_header';

  function handleNavbar() {
    initModalNavbar();
  }

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

    function navToFilms() {
      navigate('/movies')
    }

    function navToSavedFilms() {
      navigate('/saved-movies')
    }

    


    return (
      <>
    <header className={`${!loc ? 'header' : 'header__greeting'}`}>
      <button className={`logo__btn ${!loc ? 'logo__btn_place_header' : 'logo__btn_place_greeting'}`} 
              onClick={navToMain}>
        <img src={logo} alt="Логотип" className="logo"></img>
      </button> 
      { btnDropList && !modalState && login && !loc &&
      <img src={dropListIcon} alt="иконка с тремя полосками" onClick={handleNavbar} className="header__droplist"></img>
      } 
       {!btnDropList &&  login && !loc && 
       <Navbar 
        navToFilms={navToFilms}    
        navToSavedFilms={navToSavedFilms}                                   
        modalState={modalState}                                   
         />}                                    
      { !login && !loc &&                               
        <button  
        className="header__btn header__btn-reg"
        onClick={navToSigUp}
        >{register}
        </button>
        } 
      { !login && !loc  &&
        <button  
        className="header__btn header__btn-login"
        onClick={navToSigIn}
        >{enter}
        </button> 
        }
     {!btnDropList && login && !loc && <button className={`header__btn header__btn-acc ${btnAccStyle}`}> 
        <img src ={profile} onClick={navToAcc} className="header__btn header__btn-auth" alt="Информация аккаунта"></img> 
      </button> }
      { loc &&  <h1 className="header__greeting-text">{greetingText}</h1>} 
    </header>
    {modalState && <NavigatePopup 
      initModalNavbar={handleNavbar} 
      navToAcc={navToAcc}
      navToFilms={navToFilms}
      navToSavedFilms={navToSavedFilms}
      modalState={modalState}
      navToMain={navToMain}
      />}
      </>
    );
  }

  export default Header;