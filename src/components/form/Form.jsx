import { useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";
function Form({children, onSubmit, textSubmitBtn, btnCapcha, btn, placeBtnSubmit}) {
  const navigate = useNavigate();
  const location = useLocation();
  const [btnFormSumitState, setBtnFormSumitState] = useState(false);

    function redirect() {
      if(location.pathname === '/signin') {
        navigate('/signup')
      } else {
        navigate('/signin')
      }
    }
    
    function handleSubmit(e) {
        e.preventDefault();
        onSubmit();
      }

    return (
    <article className="form">
      <form 
      id="form"
      className="form__input-wrapper"
      onSubmit={handleSubmit}
      >
        {children}
        <button 
        type="submit" 
        disabled={!btnFormSumitState}
        className={`form__btn-submit form__btn-submit_place_${placeBtnSubmit}`}
        >
        {textSubmitBtn}
        </button>
      </ form>
      <div className="form__btn-wrapper">
        <p className="form__btn-capcha">{btnCapcha}</p>
        <button className="form__btn"
        onClick={redirect}
        >{btn}</button>
      </div>
      </article>
    );
  }
  
  export default Form;