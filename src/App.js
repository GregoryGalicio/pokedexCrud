import React, { useState, useEffect } from "react";
import { BrowserRouter, Link } from "react-router-dom";
import './App.css'

const App = () => {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=150')
    .then(response => response.json())
    .then(data => setPokemons(data.results));
}, [])


  return (
    <BrowserRouter>
      <main className="container" >
        <nav>
          {pokemons.map((pokemon)=>{
            return <Link  key={pokemon.name} to={`/${pokemon.name}`}>{pokemon.name}</Link>
          })}
        </nav>
        <aside></aside>
        <article></article>
      </main>
    </BrowserRouter>
  );
}

export default App;
