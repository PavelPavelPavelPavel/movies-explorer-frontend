function Portfolio() {
  
  const gitHub = "https://github.com/PavelPavelPavelPavel/";
    return (
      <section className="portfolio">
        <h2 className="portfolio__title">Портфолио</h2>
        <ul className="portfolio__list">
        <li className="portfolio__list_item">    
            <a  href={`${gitHub}how-to-learn.git`} target="blanc" className="portfolio__link portfolio__link_place_portfolio">Статичный сайт</a>
            <a 
            className="portfolio__btn"
            target="blanc"
            href={`${gitHub}how-to-learn.git`}
            >
            ↗
            </a> 
        </li>    
        <li className="portfolio__list_item">    
             <a  href={`${gitHub}russian-travel.git`} target="blanc" className="portfolio__link portfolio__link_place_portfolio">Адаптивный сайт</a>
            <a
            className="portfolio__btn"
            target="blanc"
            href={`${gitHub}russian-travel.git`}
            >↗</a> 
        </li>     
        <li className="portfolio__list_item">    
            <a  href={`${gitHub}express-mesto-gha.git`} target="blanc" className="portfolio__link portfolio__link_place_portfolio">Одностраничное приложение</a>
            <a 
            className="portfolio__btn"
            target="blanc"
            href={`${gitHub}express-mesto-gha.git`}
            >↗</a> 
        </li>   
        </ul>      
      </section>
    );
  }
  
  export default Portfolio;