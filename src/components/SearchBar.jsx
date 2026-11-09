/* ======================================================
    Lab 8 - SearchBar.jsx starter
====================================================== */

import React, { useState } from "react";

export default function SearchBar({ onSearch }) {
    // TODO 13: done
    // Create local state variable inputValue initialized to "" 
    const [inputValue, setInputValue] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        // TODO 14: done
        // If inputValue.trim() is not empty: 
        // - call onSearch with inputValue.trim() 
        // - clear the input by setting inputValue to ""

        if (inputValue.trim() !== "") {
            onSearch(inputValue.trim());
            setInputValue("");
        } 
    };

    return (
        <form className="searchForm" onSubmit={handleSubmit}>
            {/* TODO 15: done
                Create a controlled input: 
                - value should be inputValue 
                - onChange should update inputValue 
                - add a helpful placeholder
            */}
            <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Enter a movie title..."
            />

            <button type="submit" className="primary">Search Movies</button>
        </form>
    );
}