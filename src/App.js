import { useEffect, useState }from 'react';
import './App.css';
import { Navbar } from './components/Navbar';
import { Pokedex } from './components/Pokedex';
import { Searchbar } from './components/Searchbar';
import { getPokemons, getPokemonsData } from './services/pokemonService';


function App() {

  const [pokemons, setPokemons] = useState([]);

  const fetchPokemons = async () => {

    const data = await getPokemons();
    const promises = data.results.map(async (pokemon)=>{
      return await getPokemonsData(pokemon.url)
    })
    const results = await Promise.all(promises)
    setPokemons(results)
  }

  useEffect(() => {
    fetchPokemons()
  }, [])
  
  return (
    <div>
      <Navbar />
      <div className="App">
        <Searchbar />
        <Pokedex pokemons={pokemons}/>
      </div>
    </div>
  );
}

export default App;
