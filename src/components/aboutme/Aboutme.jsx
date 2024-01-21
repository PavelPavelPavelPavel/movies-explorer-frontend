import avatar from "../../images/avatar.jpg";
import Portfolio from "../portfolio/Portfolio";

function Aboutme() {
    return (
      <section className="aboutme">
       <h2 className="aboutme__title">Студент</h2>
       <div className="line line_place_aboutme"></div>
       <div className="aboutme__wrapper">
         <div className="aboutme__wrapper-text">
            <h3 className="aboutme__name">Павел</h3>
            <p className="aboutme__profession">Студент Yandex</p>
            <p className="aboutme__description">
            Я родился и живу в Москве, закончил МКЖТ по специальности оптоволоконные системы связи. 
            Люблю слушать музыку, 
            а ещё увлекаюсь бегом, борьбой и велоспортом. Долгое время работал на гос предприятии, 
            потом поменял работу и сейчас устанавливаю кухни.
            Как закончу обучение  - сразу буду искать работу по новой специальности.
            </p>
            <a href="https://github.com/PavelPavelPavelPavel" target="blanc" className="portfolio__link portfolio__link_place_aboutme">Github</a>
          </div>
        <img src={avatar} className="aboutme__img" alt="Фото мужчины"></img>
       </div>
       <Portfolio/>
      </section>
    );
  }
  
  export default Aboutme;