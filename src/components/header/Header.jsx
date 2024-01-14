import Navbar from "../navbar/Navbar";
import HeaderBtnAuth from "./__btn/__btn-auth/Header_btn-auth";
import HeaderBtnLogin from "./__btn/__btn-login/Header__btn-login";
import HeaderBtnReg from "./__btn/__btn-reg/Header__btn-reg";
import logo from "../../images/logo.svg";


function Header() {
    return (
    <header className="header">   
      <img src={logo} alt="Лого" className="header__icon"></img> 
        {/* <HeaderBtnReg></HeaderBtnReg>
        <HeaderBtnLogin></HeaderBtnLogin> */}
      <Navbar></Navbar>
      <HeaderBtnAuth></HeaderBtnAuth>
    </header>
    );
  }
  
  export default Header;