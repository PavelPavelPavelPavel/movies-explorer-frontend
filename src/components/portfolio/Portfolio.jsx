import btnImg from "../../images/portfolio-btn.svg";

function Portfolio() {
    return (
      <section className="portfolio">
        <h2 className="portfolio__title">Портфолио</h2>
        <div className="portfolio__wrapper">    
            <a  href="https://github.com/PavelPavelPavelPavel/how-to-learn.git" target="blanc" className="portfolio__link portfolio__link_place_portfolio">Статичный сайт</a>
            <button className="portfolio__btn"><img src={btnImg} className="portfolio__img"/></button> 
        </div> 
        <div className="line line_place_portfolio"/>     
        <div className="portfolio__wrapper">    
             <a  href="https://github.com/PavelPavelPavelPavel/russian-travel.git" target="blanc" className="portfolio__link portfolio__link_place_portfolio">Адаптивный сайт</a>
            <button className="portfolio__btn"><img src={btnImg} className="portfolio__img"/></button> 
        </div>     
        <div className="line line_place_portfolio"/> 
        <div className="portfolio__wrapper">    
            <a  href="https://github.com/PavelPavelPavelPavel/express-mesto-gha.git" target="blanc" className="portfolio__link portfolio__link_place_portfolio">Одностраничное приложение</a>
            <button className="portfolio__btn"><img src={btnImg} className="portfolio__img"/></button> 
        </div>        
      </section>
    );
  }
  
  export default Portfolio;