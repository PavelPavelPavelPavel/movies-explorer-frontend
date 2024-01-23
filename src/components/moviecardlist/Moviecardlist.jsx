import Moviecard from "../moviecard/Moviecard";

function Moviecardlist({movies}) {
    return (
    <section className="moviecardlist">
    {movies.map((movie) => {
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

export default Moviecardlist;