function Profile() {
    const email = 'email@example.com';
    const name = 'Pavel';

    return (
      <article className="profile">
        <h2 className="profile__title">Привет, Павел</h2>
        <form className="profile__form">
            <div className="profile__input-wraper">
              <label for="profileName"  className="profile__label">Имя</label>
              <input 
              disabled
              type="text" 
              className="profile__input" 
              name="profileName" 
              id="profileName" 
              placeholder="name"
              value={name}
              />
            </div>
            <div className="line line_place_profile"/>
            <div className="profile__input-wraper">
              <label for="profileEmail" className="profile__label">E-mail</label>
              <input
              disabled
              type="email" 
              className="profile__input" 
              name="profileEmail" 
              id="profileEmail" 
              placeholder="exapmle@mail.com"
              value={email}
              />
            </div>
            <button className="profile__form-btn">Редактировать</button>
        </form>
            <button className="profile__logout">Выйти из аккаунта</button>
      </article>
    );
  }
  
  export default Profile;