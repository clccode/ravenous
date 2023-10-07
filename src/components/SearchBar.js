import React from 'react';
import './SearchBar.css';

function SearchBar() {
    return (
        <div>
            <form>
                <input type='text' placeholder='Search Businesses'/>
                <input type='text' placeholder='Where?'/>
            </form>
            <button type='submit'>Let's Go</button>
        </div>
    );
}

export default SearchBar;