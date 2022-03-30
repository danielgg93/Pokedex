import React, { useState } from 'react'
import {searchPokemon} from '../services/pokemonService';

export const Searchbar = () => {
   
    const [search, setsearch] = useState("")
    const [pokemon, setPokemon] = useState("second")
    
    const onChange = (e) =>{
        console.log(e.target.value)
        setsearch(e.target.value);
    }

    const onClick = async () => {
        const data = await searchPokemon(search);
        setPokemon(data)
    }
  return (
    <div className='searchbar-container'>
        <div className='searchbar'>
            <input placeholder='Buscar pokemon...'
            onChange={onChange}/>
        </div>
        <div className='searchbar-btn'>
            <button onClick={onClick} variant="dark">Buscar</button>
        </div>
    </div>
  )
}
