/* ======================================================
    Lab 8 - App.jsx starter
====================================================== */

import React, { useEffect, useState } from "react";
import Header from "./components/Header.jsx";
import SearchBar from "./components/SearchBar.jsx";
import MovieGrid from "./components/MovieGrid.jsx";

export default function App() {
  // TODO 3: done  
  // Create state variables using useState: 
  // - movies: empty array 
  // - isLoading: true 
  // - error: empty string 
  // - searchTerm: "Batman" 
  // - watchlist: empty array 
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  const [searchTerm, setSearchTerm] = useState("Batman");
  const [watchlist, setWatchlist] = useState([]);


  const API_KEY = "f9b9d7b9";


  const fetchMovies = async (query) => {
    // TODO 4: done  
    // Before fetching: 
    // - set isLoading to true 
    // - clear the error message 
    setIsLoading(true);
    setError("");

    if (!API_KEY || API_KEY === "ENTER_OMDB_API_KEY_HERE") {
      // Makes movies empty such as setMovies([]) 
      // Call setError with your error message such as “No API key” 
      // Set isLoading to false; 
      setMovies([]);
      setError("No API key");
      setIsLoading(false);

      return;
    }

    try {
      const url =
        `https://www.omdbapi.com/?s=${encodeURIComponent(query)}&apikey=${API_KEY}`;

      const response = await fetch(url);
      const data = await response.json();

      // TODO 5: done 
      // If data.Response is True, store data.Search in movies, use setMovies. 
      // Otherwise: 
      // - set movies to [] (like TODO 4) 
      // - set error to data.Error or “No movies found” 
      if (data.Response === "True") {
        setMovies(data.Search);
      } else {
        setMovies([]);
        setError(data.Error || "No movies found");
      }

    } catch (err) {
      // TODO 6: done 
      // Set error to "Failed to fetch movies." 
      // Set movies to [] 
      setError("Failed to fetch movies");
    } finally {
      // TODO 7: done  
      // Set isLoading to false  
      setIsLoading(false);
    }
  };

  useEffect(() => {
    // TODO 8: done
    // Call fetchMovies with searchTerm 
    // This should run on first load and when searchTerm changes. 
    fetchMovies(searchTerm);
  }, [searchTerm]);

  const handleSearch = (newSearchTerm) => {
    // TODO 9: done
    // Update searchTerm using the value received from SearchBar. 
    // Do not call fetchMovies directly here. 
    setSearchTerm(newSearchTerm);
  };

  const addToWatchlist = (movie) => {
    setWatchlist((prevWatchlist) => {
      const alreadyExists = prevWatchlist.some(
        (item) => item.imdbID === movie.imdbID
      );
      if (alreadyExists) {
        return prevWatchlist;
      }
      return [...prevWatchlist, movie];
    });
  };

  return (
    <div className="page">
      <Header title="Movie Search" searchTerm={searchTerm} />
        <SearchBar onSearch={handleSearch} />

      {/* TODO 10: done
          Render SearchBar and pass handleSearch as onSearch
          
      */}

      <main className="panel">
        {/* TODO 11A: done
            Conditional rendering: 
            - If isLoading is true, show <p className="status">Loading...</p> 
            - Else if error is not empty, show <p className="status error">{error}</p> 
            - Else if movies.length === 0, show 
              <p className="status">No movies found.</p> 
            - Otherwise render <MovieGrid movies={movies} addToWatchlist={addToWatchlist} /> 
        */}
        {isLoading ? (
          <p className="status">Loading...</p>
        ) : error ?  (
          <p className="status error">{error}</p>
        ) : movies.length === 0 ? (
          <p className="status">No movies found.</p>
        ) : (
            <MovieGrid
              movies={movies}
                addToWatchlist={addToWatchlist}
            />
        )}

        {/* TODO 11B: done
            Add a watchlist section below the search results. 
            - Show a heading such as "My Watchlist" 
            - If watchlist.length === 0, show "No movies in watchlist yet." 
            - Otherwise map through watchlist and render each saved movie 
        */}

        <h2>My Watchlist</h2>

        {watchlist.length === 0 ? (
            <p>No movies in watchlist yet.</p>
        ) : (
            watchlist.map((movie) => (
                <div key={movie.imdbID}>
                    <h3>{movie.Title}</h3>
                    <p>{movie.Year}</p>
                </div>
            ))
        )}
      </main>
    </div>
  );
}