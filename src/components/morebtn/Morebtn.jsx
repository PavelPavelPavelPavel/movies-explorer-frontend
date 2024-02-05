function Morebtn({getMoreFilms}) {

    function handleClickMoreFilms() {
        getMoreFilms()
    }
    return (
        <section className="morebtn">
        <button 
        className="morebtn__btn"
        onClick={handleClickMoreFilms}
        >Ещё</button>
        </section>
    );
  }
  
  export default Morebtn;