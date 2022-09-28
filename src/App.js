import React, { useState, useEffect } from "react";
import { BrowserRouter, Link } from "react-router-dom";
import './App.css'

const App = () => {
  const [pokemons, setPokemons] = useState([]);

  // useEffect( () => {
  //     const request = async ()=>{
  //       const data = await fetch("https://pokeapi.co/api/v2/pokemon?limit=150");
  //       const resp= await data.json();
  //       return resp;
  //       if (resp.results.length){
  //         console.log(resp.results);
  //       }
  //     };
  //     request() 
  // }, []);

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
        <article></article>
      </main>
    </BrowserRouter>
  );
}

export default App;
