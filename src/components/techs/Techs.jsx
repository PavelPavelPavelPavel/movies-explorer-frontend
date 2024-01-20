function Techs() {
    return (
      <section className="techs">
        <h2 className="techs__title">Технологии</h2>
        <div className="line line_place_techs"></div>
        <h3 className="techs__text-title">7 технологий</h3>
        <p className="techs__text">На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
        <ul className="techs__nav">
            <li className="icon icon_place_techs"><p>HTML</p></li>
            <li className="icon icon_place_techs"><p>CSS</p></li>
            <li className="icon icon_place_techs"><p>JS</p></li>
            <li className="icon icon_place_techs"><p>React</p></li>
            <li className="icon icon_place_techs"><p>Git</p></li>
            <li className="icon icon_place_techs"><p>Express.js</p></li>
            <li className="icon icon_place_techs"><p>mongoDB</p></li>
       </ul>
      </section>
    );
  }
  
  export default Techs;