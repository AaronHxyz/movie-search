/* ======================================================
    Lab 8 - MovieCard.jsx starter
====================================================== */

export default function MovieCard({ movie, addToWatchlist }) {
    const posterAvailable = movie.Poster && movie.Poster !== "N/A";

    return (
        <article className="card">
            {posterAvailable ? (
                <img src={movie.Poster} alt={movie.Title} />
            ) : (
                <div className="noPoster">No Poster</div>
            )}

            <div className="cardContent">
                {/* TODO 17: done
                    Render movie. Title in an h3
                */}
                <h3>{movie.Title}</h3>

                {/* TODO 18: done
                    Render the year, type, and any other info you want to show in a p tag.
                    - example idea: 2005 – movie – rating – etc..
                */}
                <p>{movie.Year} – {movie.Type}</p>

                {/* TODO 19: done
                    Add an "Add to Watchlist" button. When clicked, it should call addToWatchlist(movie). 
                */}
                <button onClick={() => addToWatchlist(movie)}>
                    Add to Watchlist
                </button>
            </div>
        </article>
    );
} 