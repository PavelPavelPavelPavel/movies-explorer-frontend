import { useNavigate, useLocation } from "react-router-dom";
import { useEffect } from "react";

function Form({children, onSubmit, textSubmitBtn, btnCapcha, btn, placeBtnSubmit, btnFormSumitState}) {
  const navigate = useNavigate();
  const location = useLocation();
  

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
      noValidate
      type="submit"
      >
        {children}
        <button 
        type="submit" 
        className={`form__btn-submit form__btn-submit_place_${placeBtnSubmit}`}
        disabled={!btnFormSumitState}
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