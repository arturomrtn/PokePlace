import React from 'react';
import { searchPokemon } from '../pokeapi';
const { useState } = React

const Searchbar = () => {
const [search, setSearch] = useState("")
const [pokemon, setPokemon] = useState()

const changeText = (e) => {
      setSearch(e.target.value)
}

const onClick = async (e) => {
      const data = await searchPokemon(search)
      setPokemon(data)
};
    return (

        <div>
            <div>
            <input placeholder= "Search Pokemon..."
                   onChange = {changeText}/>
                   </div>
        <div>
            <button onClick = {onClick} />
            <div>
        </div>
        {pokemon && <div>
        <div><h1>Name: {pokemon.name}</h1></div>
        <h1>Weight: {pokemon.weight}</h1>
        <div><img src={pokemon.sprites.front_default} alt = "poke-api-pok"/></div>
        </div>}
        </div>
        </div>

    
    );
}

export default Searchbar;