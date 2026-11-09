/* ======================================================
    Lab 8 - MovieGrid.jsx starter
====================================================== */

import MovieCard from "./MovieCard.jsx";

export default function MovieGrid({ movies, addToWatchlist }) {
    return (
        <div className="grid">
            {/* TODO 16: done
                Render MovieCard for each movie:
                - you can use map use key={movie.imdbID} and pass movie as a prop
                - you can also pass addToWatchlist={addToWatchlist} 
            */}
            {movies.map((movie) => (
                <MovieCard
                    key={movie.imdbID}
                    movie={movie}
                    addToWatchlist={addToWatchlist}
                />
            ))}
        </div>
    );
} 