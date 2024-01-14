import profile from "../../../../images/profile.svg";

function HeaderBtnAuth() {
    return (  
      <button className="header__btn header__btn-acc">
        <img src ={profile} className="header__btn header__btn-auth" alt="Информация аккаунта"></img>
      </button>
    );
  }

  export default HeaderBtnAuth;