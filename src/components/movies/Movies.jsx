import Searchform from "../searchform/Serachform";
import Morebtn from "../morebtn/Morebtn";
import Moviecardlist from "../moviecardlist/Moviecardlist";
import Moviecard from "../moviecard/Moviecard";

function Movies({movies}) {
    return (
      <div className="movies">
       {/* <Searchform/> */}
       {/* <Morebtn/> */}
       <Moviecardlist
        movies={movies}
       />
       {/* <Moviecard/> */}
      </div>
    );
  }
  
  export default Movies;