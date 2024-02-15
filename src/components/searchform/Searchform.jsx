import btnSubmitImg from "../../images/searchform-btn-submit.svg";
import { useState, useEffect, useRef } from "react";
import { useInput } from "../../utils/UseInput";
import { useLocation } from "react-router-dom";
import { serverError } from "../../constants/errorText/otherErrorText";


function Searchform({getShortFilms, getFilms , movies}) {
  const location = useLocation();
  const searchRef = useRef(null);
  const [checkBox, setCheckBox] = useState(false);
  const searchInput = useInput('', {isEmpty: true});
  

useEffect(() => {
  if(location.pathname === '/saved-movies') {
      setCheckBox(false);
      onClear();   
  }
  if (location.pathname === '/movies') {
    setCheckBox(JSON.parse(localStorage.getItem('checkBox')));
    searchRef.current.value = JSON.parse(localStorage.getItem('savedSearch'));
  } 
}, [location.pathname])


useEffect(() => {
  getShortFilms(checkBox);
}, [checkBox, getShortFilms]);


function handleGetShortFilms({target: { checked }}) { 
      setCheckBox(checked);
      if(location.pathname === '/movies') {
        localStorage.setItem('checkBox', checked);
      }
  }

  const onClear = () => {
    searchRef.current.value = '';
  };


function handleSubmit(e) {
    e.preventDefault();
    getFilms(searchInput.value);
    localStorage.setItem('savedSearch', JSON.stringify(searchInput.value))
  }

    return (
        <>
      <form className="searchform" onSubmit={handleSubmit} noValidate>
        <div className="searchform__wrapper">
            <input className="searchform__input" 
                   placeholder="Фильм" 
                   required
                   ref={searchRef}
                   defaultValue={searchInput.value}
                   onChange={(e) => searchInput.onChange(e)}
                   onBlur={(e) => searchInput.onBlur(e)}
                   />
                   <span className="searchform__input-error"></span>
            <button type="submit" 
                    className="searchform__btn-submit"
                    >
              <img src={btnSubmitImg} className="searchform__btn-img" alt='синий фон и стрелка'></img>
            </button>
        </div>
        <div className="searchform__checkbox-wrapper">
            <input className="searchform__checkbox" 
                   checked={checkBox} 
                   onChange={handleGetShortFilms} 
                   id="filter" 
                   type="checkbox" 
                   aria-checked="false"
                   />
            <label className="searchform__checkbox-capcha" htmlFor="filter"></label>
            <span className="searchform__checkbox-custom">Короткометражки</span>
        </div>
      </form>
      </>
    );
  }
  
  export default Searchform;