import Moviecard from "../moviecard/Moviecard";


function Savedmovies({saveMovies}) {

    return (
    <section className="savedmovies">
    {saveMovies.map((movie) => {
        return (
    <Moviecard
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