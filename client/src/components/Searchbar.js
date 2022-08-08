import React from 'react';
import { searchPokemon } from '../pokeapi';
const { useState } = React

const Searchbar = () => {
const [search, setSearch] = useState("")

const changeText = (e) => {
      setSearch(e.target.value)
}

const onClick = async (e) => {
      const data = await searchPokemon(search)
      console.log(data)
}

    return (
        <div>
        <div>
            <input placeholder= "Search Pokemon..."
                   onChange = {changeText}/>

        <div>
            <button onClick = {onClick}/>
        </div>
        </div>
        </div>
    
    );
}

export default Searchbar;