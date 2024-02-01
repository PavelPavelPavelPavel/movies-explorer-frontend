import { useState, useEffect } from "react";
import  useResize  from "../../utils/ResizeWidth";

function Promo() {
const resize = useResize();
const [br, setBr] = useState(false);

useEffect(() => {
  if (resize.isScreenMd) {
    setBr(false)
  } else {
    setBr(true)
  }
}, [resize.isScreenMd]);



    return (
      <section className="promo">
        <h1 className="promo__heading">Учебный проект студента{!br && <br />}факультета Веб-разработки.</h1>
        <ul className="promo__nav">
            <li ><a a href="#aboutproject" className="icon icon_place_promo">О проекте</a></li>
            <li ><a a href="#techs" className="icon icon_place_promo">Технологии</a></li>
            <li ><a a href="#aboutme" className="icon icon_place_promo">Студент</a></li>
        </ul>
      </section>
    );
  }
  
  export default Promo;