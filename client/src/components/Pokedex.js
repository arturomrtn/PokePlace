import React from 'react'
import { getAllPokemon } from '../pokeapi';
import PokemonCard from './PokemonCard'
const { useState, useEffect } = React;


const Pokedex = () => {

    const [allPokemon, setAllPokemon] = useState([])

    const fetchPokemon = async (e) => {
        const data = await getAllPokemon()
        setAllPokemon(data.results)
    };

    useEffect(() => {
        fetchPokemon();
    }, [])

    return (

        <div>
            <div>
                <h1>Pokedex</h1>
                <div>Pagination</div>
                <div>
                </div>
                {allPokemon.map(allPokemon => (
                    <PokemonCard allPokemon={allPokemon} key={allPokemon.name} />
                ))}
            </div>
        </div>
    )
}

export default Pokedex