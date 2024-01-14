import Navbar from "../navbar/Navbar";
import logo from "../../images/logo.svg";
import profile from "../../images/profile.svg";

function Header() {
    return (
    <header className="header">   
      <img src={logo} alt="Лого" className="header__icon"></img>
      <Navbar></Navbar>
      <button className="header__btn">
        <img src ={profile} className="header__btn-img" alt="Иконка торса"></img>
      </button>
    </header>
    );
  }
  
  export default Header;