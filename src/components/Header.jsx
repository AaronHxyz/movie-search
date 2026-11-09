/* ======================================================
    Lab 8 - Header.jsx starter
====================================================== */

export default function Header({ title, searchTerm }) {
    /* TODO 12: Create the entire Header component. done
    
       Requirements:
        - Show the title prop in an h1
        - Show a one-sentence description
        - Show the current search term somewhere in the header
        - Replace return null with your JSX
    */

    return (
        <header>
            <h1>{title}</h1>
            <p>Search for your favourite movies and add them to your watchlist!</p>
            <p>Currently searching for: {searchTerm}</p>
        </header>
    );
}