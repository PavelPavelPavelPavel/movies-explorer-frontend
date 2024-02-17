import { aboutProject, techs, student } from "../../constants/words";
import { promoHeader } from "../../constants/texts";

function Promo() {

    return (
      <section className="promo">
        <h1 className="promo__heading">{promoHeader}</h1>
        <nav className="promo__nav-wrapper">
        <ul className="promo__nav">
            <li ><a  href="#aboutproject" className="icon icon_place_promo">{aboutProject}</a></li>
            <li ><a  href="#techs" className="icon icon_place_promo">{techs}</a></li>
            <li ><a  href="#aboutme" className="icon icon_place_promo">{student}</a></li>
        </ul>
        </nav>
      </section>
    );
  }
  
  export default Promo;