import React from 'react';
import './App.css';
import BusinessList from './Business';
import SearchBar from './SearchBar'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <SearchBar />
        <BusinessList />
      </header>
    </div>
  );
}

export default App;
