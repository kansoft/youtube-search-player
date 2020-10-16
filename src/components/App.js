import React from 'react';
import './App.css';
import SearchBar from './searchbar/SearchBar';
import Player from './player/Player';
import Details from './details/Details';

function App() {
  return (
    <div className="app">
      <SearchBar />
      <Player />
      <Details />
    </div>
  );
}

export default App;
