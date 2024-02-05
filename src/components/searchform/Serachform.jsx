import btnSubmitImg from "../../images/searchform-btn-submit.svg";

function Searchform() {

  function handleSubmit(e) {
    e.preventDefault();
  }

    return (
        <>
      <form className="searchform" onSubmit={handleSubmit}>
        <div className="searchform__wrapper">
            <input className="searchform__input" placeholder="Фильм" required/>
            <span className="searchform__input-error"></span>
            <button type="submit" className="searchform__btn-submit">
              <img src={btnSubmitImg} className="searchform__btn-img" alt='синий фон и стрелка'></img>
            </button>
        </div>
        <div className="searchform__checkbox-wrapper">
            <input className="searchform__checkbox" id="filter" type="checkbox" aria-checked="false"/>
            <label className="searchform__checkbox-capcha" htmlFor="filter"></label>
            <span className="searchform__checkbox-custom">Короткометражки</span>
        </div>
      </form>
      </>
    );
  }
  
  export default Searchform;