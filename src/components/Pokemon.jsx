import React ,{ useEffect } from 'react';

export default function Pokemon({name}) {
    useEffect(() => {
        if(name) {
            fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
            .then(response => response.json());
            console.log(Pokemon);
        };
        
    }, [] ) 
    
    return(
        <div>Pokemon</div>
    )
}

