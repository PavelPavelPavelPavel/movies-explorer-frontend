import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { useContext, useState, useEffect} from "react";
import { useInput } from "../../utils/UseInput";
import { emailRegex } from "../../constants/regexp";
import { emailError, lengthError } from "../../constants/errorText/formError";

function Profile({logOut, updateUserInfo, errorText}) {
 const { currentUser } = useContext(CurrentUserContext);
 const [btnSubmitState, setBtnSubmitState] = useState(true);
 const userName = useInput(currentUser.name, {minLength: 2});
 const userEmail = useInput(currentUser.email, {email: emailRegex});
 const [validErrorText, setValidErrorText] = useState('');

useEffect(() => {
  if(userEmail.emailError || userName.minLengthError) {
    setBtnSubmitState(true)
  } else if (userName.value === currentUser.name &&  userEmail.value === currentUser.email) {
    setBtnSubmitState(true)
  }
   else {
    setBtnSubmitState(false)
  };
  if(userEmail.emailError) {
    setValidErrorText(emailError)
  } else if(userName.minLengthError) {
    setValidErrorText(lengthError)
  } else {
    setValidErrorText('')
  }
}, [userName, userEmail, currentUser.email, currentUser.name, btnSubmitState, errorText])



    function handleLogout() {
      return logOut();
    };

  
    function handleSubmit(e) {
      e.preventDefault();
      updateUserInfo({
        name: userName.value,
        email: userEmail.value,
      })
    };
    
    return (
      <section className="profile">
        <h1 className="profile__title">{`Привет, ${currentUser.name}!`}</h1>
        <form 
        className="profile__form"
        onSubmit={handleSubmit}
        >
            <div className="profile__input-wrapper">
              <label htmlFor="profileName"  className="profile__label">Имя</label>
              <input 
              type="text" 
              defaultValue={userName.value}
              className="profile__input" 
              name="profileName" 
              id="profileName" 
              placeholder="name"
              onChange={e => userName.onChange(e)}
              onBlur={e => userName.onBlur(e)}
              />
            </div>
            <div className="profile__input-wrapper">
              <label htmlFor="profileEmail" className="profile__label">E-mail</label>
              <input
              type="email" 
              defaultValue={userEmail.value}
              className="profile__input" 
              name="profileEmail" 
              id="profileEmail" 
              placeholder="exapmle@mail.com"
              onChange={e => userEmail.onChange(e)}
              onBlur={e => userEmail.onBlur(e)}
              />
            </div>
            <span className="profile__error">{validErrorText || errorText}</span>
            <button className="profile__form-btn" disabled={btnSubmitState}>Редактировать</button>
        </form>
            <button className="profile__logout" onClick={handleLogout}>Выйти из аккаунта</button>
      </section>
    );
  }
  
  export default Profile;