import React, {useState}  from 'react'
import { View, Image, ScrollView } from 'react-native'
import axios from 'axios'
import { Text } from '@ui-kitten/components'

import MainLayout from '../layouts/MainLayout'
import SearchBar from '../components/SearchBar'

const PokeMasterDex = () => {
    const [pokemonDatas, setPokemonData] = useState([])
    const [pokemonMasters, setPokemonMaster] = useState([])

    const fetchPresetPokemon = async () => {
        try {
            const response = await axios.get('https://pokeapi.co/api/v2/pokemon/?limit=25')
            const pokemons = await response.data.results
            let index = 0
            let  pokefull = []
            await pokemons.map(pokemon => {
                const tmp = getFullData(index)
                pokefull = [...pokefull, tmp]
                console.log("pokefull", pokefull)
                index++
            })
            await setPokemonData(pokemons)
            await setPokemonMaster(pokefull)
        }
        finally{}
    }

    const getFullData = async (i) => {
        try{
            let res = await axios.get(pokemonDatas[i]["url"])
            res = await res.data.sprites.front_default
            return res
        }
        catch(err) {
            console.log(err)
        }
    }

    const listPokemon = () => {
        let key = 0
        let template = pokemonDatas.map(pokemon => {
            console.log("pokemonMasters : ", pokemonMasters[1])
            const t = (
                <View key={key}>
                    <Image 
                        style={{width: 80, height: 80}}
                        // source={{
                        //     uri: pokemonMasters[key],
                        // }}
                    />
                    <Text>{pokemon.name}</Text>
                </View>
            )
            key++
            return t
        })
        return template
    }

    return (
        <MainLayout>
            <SearchBar fetchPresetPokemon={fetchPresetPokemon} />
            <Text category="h1" style={{textAlign : "center"}}>PokeMasterDex</Text>
            <ScrollView>
            {
                pokemonDatas ?
                    listPokemon()
                :
                <></>
            }
            </ScrollView>
        </MainLayout>
    )
}

export default PokeMasterDex