import { useState } from "react";

function Profile({logOut}) {
    
    const [ initialInput, setInitialInput ] = useState(true);

    function inputEnable (e) {
        e.preventDefault();
        setInitialInput(false);
        if (!initialInput) {
          setInitialInput(true)
        }
    }

    
    function handleLogout() {
      return logOut();
    }
    

    return (
      <article className="profile">
        <h2 className="profile__title">Привет, Павел</h2>
        <form className="profile__form">
            <div className="profile__input-wraper">
              <label for="profileName"  className="profile__label">Имя</label>
              <input 
              disabled={initialInput}
              type="text" 
              className="profile__input" 
              name="profileName" 
              id="profileName" 
              placeholder="name"
              value={''}
              />
            </div>
            <div className="line line_place_profile"/>
            <div className="profile__input-wraper">
              <label for="profileEmail" className="profile__label">E-mail</label>
              <input
              disabled={initialInput}
              type="email" 
              className="profile__input" 
              name="profileEmail" 
              id="profileEmail" 
              placeholder="exapmle@mail.com"
              value={''}
              />
            </div>
            <button className="profile__form-btn" onClick={inputEnable}>Редактировать</button>
        </form>
            <button className="profile__logout" onClick={handleLogout}>Выйти из аккаунта</button>
      </article>
    );
  }
  
  export default Profile;