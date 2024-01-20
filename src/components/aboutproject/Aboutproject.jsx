function Aboutproject() {
    return (
      <section className="aboutproject">
        <h2 className="aboutproject__title">О проекте</h2>
        <div className="line line_place_about-project"></div>
        <ul className="aboutproject__description">
            <li className="aboutproject__description-item">
                <h3 className="aboutproject__description-title">Дипломный проект включал 5 этапов</h3>
                <p className="aboutproject__description-text">Составление плана, работу над бэкендом, вёрстку,
                                                                 добавление функциональности и финальные доработки.</p>
            </li>
            <li className="aboutproject__description-item">
                <h3 className="aboutproject__description-title">На выполнение диплома ушло 5 недель</h3>
                <p className="aboutproject__description-text">У каждого этапа был мягкий и жёсткий дедлайн, 
                                                                которые нужно было соблюдать, чтобы успешно защититься.</p>
            </li>
        </ul>
       <div className="aboutproject__graph">
            <p className="aboutproject__graph_backend_img">1 неделя</p>
            <p className="aboutproject__graph_frontend_img">4 недели</p>
            <p className="aboutproject__graph-capcha">Back-end</p>
            <p className="aboutproject__graph-capcha">Front-end</p>
       </div>
      </section>
    );
  }
  
  export default Aboutproject;