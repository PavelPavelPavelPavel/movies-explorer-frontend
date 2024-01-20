function Portfolio() {
    return (
      <section className="portfolio">
        <h2 className="portfolio__title">Портфолио</h2>
        <div className="portfolio__wrapper">    
            <a  href="#" className="portfolio__link portfolio__link_place_portfolio">Одностраничное приложение</a>
            <button className="portfolio__btn"><img className="portfolio__img"/></button> 
        </div> 
        <div className="line line_place_portfolio"/>     
        <div className="portfolio__wrapper">    
             <a  href="#" className="portfolio__link portfolio__link_place_portfolio">Одностраничное приложение</a>
            <button className="portfolio__btn"><img className="portfolio__img"/></button> 
        </div>     
        <div className="line line_place_portfolio"/> 
        <div className="portfolio__wrapper">    
            <a  href="#" className="portfolio__link portfolio__link_place_portfolio">Одностраничное приложение</a>
            <button className="portfolio__btn"><img className="portfolio__img"/></button> 
        </div>        
      </section>
    );
  }
  
  export default Portfolio;