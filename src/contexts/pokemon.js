import React, {useState, createContext} from 'react'
import axios from 'axios'

export const PokemonContext = createContext()

const PokemonContextProvider = (props) => {
    const [generation, setGeneration] = useState(0)
    const [pokemons, setPokemons] = useState([])
    const [savedPokemons, setSavedPokemon] = useState([])


    const getPokemons = async (index) => {
        try {
            console.log(index)
            const url = `https://pokeapi.co/api/v2/pokemon/${index}`
            const response = await axios.get(url)
            if (response.data)
                return response.data
        }
        finally{}
    }

    const getGeneration = async (gen) => {
        try{
            await setPokemons([])
            let index = 1
            let fetchedPokemon = []
            while (index < gen){
                fetchedPokemon[index] = await getPokemons(index)
                index++
            }
            await console.log(fetchedPokemon)
            await setPokemons(fetchedPokemon)
        }
        catch(err){
            console.log(err)
        }
    }

    return (
        <PokemonContext
            value={{
                generation,
                pokemons,
                savedPokemons,
            }}
        >
            {props.children}
        </PokemonContext>
    )
}

export default PokemonContextProvider