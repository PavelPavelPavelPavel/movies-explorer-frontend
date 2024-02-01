

function Portfolio() {
  
    return (
      <section className="portfolio">
        <h2 className="portfolio__title">Портфолио</h2>
        <ul className="portfolio__list">
        <li className="portfolio__list_item">    
            <a  href="https://github.com/PavelPavelPavelPavel/how-to-learn.git" target="blanc" className="portfolio__link portfolio__link_place_portfolio">Статичный сайт</a>
            <button className="portfolio__btn">↗</button> 
        </li>    
        <li className="portfolio__list_item">    
             <a  href="https://github.com/PavelPavelPavelPavel/russian-travel.git" target="blanc" className="portfolio__link portfolio__link_place_portfolio">Адаптивный сайт</a>
            <button className="portfolio__btn">↗</button> 
        </li>     
        <li className="portfolio__list_item">    
            <a  href="https://github.com/PavelPavelPavelPavel/express-mesto-gha.git" target="blanc" className="portfolio__link portfolio__link_place_portfolio">Одностраничное приложение</a>
            <button className="portfolio__btn">↗</button> 
        </li>   
        </ul>      
      </section>
    );
  }
  
  export default Portfolio;