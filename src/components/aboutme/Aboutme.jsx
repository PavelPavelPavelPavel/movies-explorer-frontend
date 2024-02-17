import avatar from "../../images/avatar.jpg";
import Portfolio from "../portfolio/Portfolio";
import { student, yaStudent, studentName } from "../../constants/words";
import { aboutMeText } from "../../constants/texts";

function Aboutme() {
    return (
      <>
      <section className="aboutme" id="aboutme">
       <h2 className="aboutme__title">{student}</h2>
       <div className="aboutme__wrapper">
         <div className="aboutme__wrapper-text">
            <h3 className="aboutme__name">{studentName}</h3>
            <p className="aboutme__profession">{yaStudent}</p>
            <p className="aboutme__description">
              {aboutMeText}
            </p>
            <a href="https://github.com/PavelPavelPavelPavel" target="blanc" className="portfolio__link portfolio__link_place_aboutme">Github</a>
          </div>
        <img src={avatar} className="aboutme__img" alt="Фото пользователя"></img>
       </div>
      </section>
       <Portfolio/>
      </>
    );
  }
  
  export default Aboutme;