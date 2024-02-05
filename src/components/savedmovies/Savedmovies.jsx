import Moviecard from "../moviecard/Moviecard";

function Savedmovies({favoriteMovies, saveMovies}) {
    
 return (
        <section className="savedmovies">
        {saveMovies.map((movie) => {
            return (
        <Moviecard
                favoriteMovies={favoriteMovies}
                key={movie.id}
                link={movie.url}
                title={movie.title}
        />
        );
        })}
        </section>
        )
        }

export default Savedmovies;