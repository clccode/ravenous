import React from 'react';

function SearchBar() {
    return (
        <div>
            <form>
                <input type='text' placeholder='Name'/>
                <input type='text' placeholder='Location'/>
                <button type='submit'>Let's Go</button>
            </form>
        </div>
    );
}

export default SearchBar;