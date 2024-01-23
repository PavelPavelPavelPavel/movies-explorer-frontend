import { useState } from "react";
import "../../index.css";
import Header from '../header/Header'
import Main from '../main/Main';
import Footer from '../footer/Footer';
import Notfounderr from '../notfounderr/Notfounderr';
import Movies from '../movies/Movies';
import films from "../../constants";


function App() {
  const [movies, setMovies] = useState(films);

  return (
    <div className="App">
      {/* <Header></Header> */}
      <Movies
        movies={movies}
      />
      {/* <Main /> */}
      {/* <Footer /> */}
      {/* <Notfounderr /> */}
    </div >
  );
}

export default App;
