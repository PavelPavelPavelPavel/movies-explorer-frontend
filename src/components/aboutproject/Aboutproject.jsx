import { aboutProject } from "../../constants/words";
import { aboutProjectText } from "../../constants/texts";

function Aboutproject() {
    return (
      <section className="aboutproject" id="aboutproject">
        <h2 className="aboutproject__title">{aboutProject}</h2>
        <ul className="aboutproject__description">
            <li className="aboutproject__description-item">
                <h3 className="aboutproject__description-title">{aboutProjectText.diplom}</h3>
                <p className="aboutproject__description-text">{aboutProjectText.diplomDescription}</p>
            </li>
            <li className="aboutproject__description-item">
                <h3 className="aboutproject__description-title">{aboutProjectText.time}</h3>
                <p className="aboutproject__description-text">{aboutProjectText.timeDescription}</p>
            </li>
        </ul>
       <div className="aboutproject__graph">
            <p className="aboutproject__graph_backend_img">{aboutProjectText.oneWeek}</p>
            <p className="aboutproject__graph_frontend_img">{aboutProjectText.fourWeek}</p>
            <p className="aboutproject__graph-capcha">{aboutProjectText.back}</p>
            <p className="aboutproject__graph-capcha">{aboutProjectText.front}</p>
       </div>
      </section>
    );
  }
  
  export default Aboutproject;