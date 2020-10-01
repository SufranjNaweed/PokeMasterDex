import React, {useState, createContext} from 'react'
import axios from 'axios'

export const PokemonContext = createContext()

const PokemonContextProvider = (props) => {
    const [generation, setGeneration] = useState(0)
    const [pokemons, setPokemons] = useState([])
    const [savedPokemons, setSavedPokemon] = useState([])


    const getPokemon = async (pokemonName) => {
        try {
            console.log("pokemon name :  ", pokemonName)
            const url = `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
            const response = await axios.get(url)
            if (response.data)
                return response.data
        }
        finally{}
    }

    const getPokemons = async (pokemonArray) => {
        try{
            let index = 0
            console.log('pokename : ', pokemonArray)
            let fetchedPokemon = []
            while (index < pokemonArray.length){
                fetchedPokemon[index] = await getPokemon(pokemonArray[index].name)
                index++
            }
            await console.log('fetchedPokemon : ', fetchedPokemon)
            return fetchedPokemon
        }
        finally{}
    }

    return (
        <PokemonContext.Provider
            value={{
                generation,
                pokemons,
                savedPokemons,
                getPokemons
            }}
        >
            {props.children}
        </PokemonContext.Provider>
    )
}

export default PokemonContextProvider