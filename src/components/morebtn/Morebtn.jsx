import { more } from "../../constants/words";

function Morebtn({getMoreFilms}) {

    function handleClickMoreFilms() {
        getMoreFilms()
    }
    return (
        <section className="morebtn">
        <button 
        className="morebtn__btn"
        onClick={handleClickMoreFilms}
        >
        {more}
        </button>
        </section>
    );
  }
  
  export default Morebtn;