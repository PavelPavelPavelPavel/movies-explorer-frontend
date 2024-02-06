
function Promo() {

    return (
      <section className="promo">
        <h1 className="promo__heading">Учебный проект студента факультета Веб-разработки.</h1>
        <nav className="promo__nav-wrapper">
        <ul className="promo__nav">
            <li ><a  href="#aboutproject" className="icon icon_place_promo">О проекте</a></li>
            <li ><a  href="#techs" className="icon icon_place_promo">Технологии</a></li>
            <li ><a  href="#aboutme" className="icon icon_place_promo">Студент</a></li>
        </ul>
        </nav>
      </section>
    );
  }
  
  export default Promo;