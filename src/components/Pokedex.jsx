import React from 'react'
import { Pokemon } from './Pokemon'


export const Pokedex = ({pokemons}) => {
    return (
        <div>
            <div className='pagination-container'>
                <h1>Pokedex</h1>
                <div>Pagination</div>
            </div>
            <div className='pokedex-grid'>
                {pokemons.map((pokemon, idx) => {
                    return <Pokemon pokemon={pokemon} key={pokemon.name}/>
                    })}
            </div>
        </div>
    )
}
