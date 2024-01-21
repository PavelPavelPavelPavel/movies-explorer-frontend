import btnSubmitImg from "../../images/searchform-btn-submit.svg";

function Searchform() {
    return (
      <form className="searchform">
        <div className="searchform__wrapper">
            <input className="searchform__input" placeholder="Фильм"/>
            <span className="searchform__input-error"></span>
            <button type="submit" className="searchform__btn-submit"><img src={btnSubmitImg} className="searchform__btn-img"></img></button>
        </div>
        <div className="searchform__checkbox-wrapper">
            <input className="searchform__checkbox" id="filter" type="checkbox" aria-checked="false" tabindex="0"/>
            <label className="searchform__checkbox-capcha" for="filter">Короткометражки</label>
            <span className="searchform__checkbox-custom"></span>
        </div>
      </form>
    );
  }
  
  export default Searchform;