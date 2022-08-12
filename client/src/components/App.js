import React from 'react';
import './App.css';
import Navbar from '../components/Navbar'
import Pokedex from '../components/Pokedex'


function App() {
  return (
    <div>
    <Navbar />
    <h1>PokePlace</h1>
    <Pokedex/>
    </div >
  );
}

export default App;
