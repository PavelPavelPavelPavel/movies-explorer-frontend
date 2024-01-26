

function Form({children, onSubmit, textSubmitBtn, btnCapcha, btn, placeBtnSubmit}) {

    function handleSubmit(e) {
        e.preventDefault();
      }

    return (
    <article className="form">
      <form 
      noValidate
      className="form__input-wrapper"
      onSubmit={handleSubmit}
      >
        {children}
        <button 
        type="submit" 
        className={`form__btn-submit form__btn-submit_place_${placeBtnSubmit}`}
        >
        {textSubmitBtn}
        </button>
      </ form>
      <div className="form__btn-wrapper">
        <p className="form__btn-capcha">{btnCapcha}</p>
        <button className="form__btn">{btn}</button>
      </div>
      </article>
    );
  }
  
  export default Form;