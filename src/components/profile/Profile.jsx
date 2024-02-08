import { useState } from "react";

function Profile({logOut}) {
  
    
    function handleLogout() {
      return logOut();
    }
    

    return (
      <section className="profile">
        <h1 className="profile__title">Привет, Виталий!</h1>
        <form className="profile__form">
            <div className="profile__input-wrapper">
              <label htmlFor="profileName"  className="profile__label">Имя</label>
              <input 
              type="text" 
              className="profile__input" 
              name="profileName" 
              id="profileName" 
              placeholder="name"
              value={''}
              />
            </div>
            <div className="profile__input-wrapper">
              <label htmlFor="profileEmail" className="profile__label">E-mail</label>
              <input
              type="email" 
              className="profile__input" 
              name="profileEmail" 
              id="profileEmail" 
              placeholder="exapmle@mail.com"
              value={''}
              />
            </div>
            <button className="profile__form-btn" disabled={false}>Редактировать</button>
        </form>
            <button className="profile__logout" onClick={handleLogout}>Выйти из аккаунта</button>
      </section>
    );
  }
  
  export default Profile;