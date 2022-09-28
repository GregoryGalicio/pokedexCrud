import React, { useState, useEffect } from "react";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import './App.css'
import Pokemon from "./components/Pokemon"; 

const App = () => {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=150')
    .then(response => response.json())
    .then(data => setPokemons(data.results));
    // console.log(pokemons);
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
        <article>
          <Switch>
          {pokemons.map((pokemon)=>{
            return (
            <Route key={`r_${pokemon.name}`} exact path={`/${pokemon.name}`}>
              <Pokemon name={pokemon.name}></Pokemon>
            </Route>);
          })}
          </Switch>
        </article>
      </main>
    </BrowserRouter>
  );
}

export default App;
