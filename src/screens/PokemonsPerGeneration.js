import React, { useContext, useEffect, useState } from 'react'
import { View, Text, Image, ScrollView, TouchableWithoutFeedback } from 'react-native'
import axios from 'axios'
import { PokemonContext } from '../contexts/pokemon'
import { Spinner } from '@ui-kitten/components'

const PokemonsPerGeneration = ({route, navigation}) => {
    const { generation } = route.params
    const { getPokemons } = useContext(PokemonContext)
    const [pokemons, setPokemons] = useState([])

    // const url = 'https://pokeapi.co/api/v2/pokemon?offset=0&limit=151'
    useEffect(() => {
        fetchGenerationPokemon(generation)
    }, [])

    const generationSelector = (generation) => {
        let range
        // [START, END]
        switch(generation){
            case 1:
                range = [0, 151]
                break;
            case 2:
                range = [151, 100]
                break;
            case 3:
                range = [251, 135]
                break;
            case 4:
                range = [386, 107]
                break;
            case 5:
                range = [493, 156]
                break;
            case 6:
                range = [649, 72]
                break
            case 7:
                range = [721, 88]
                break
            case 8:
                range = [809, 87]
                break
            default:
                range = []
        }
        return range
    }

    const fetchGenerationPokemon = async () => {
        let pokeResult
        let pokemonsFromRange
        try{
            const range = await generationSelector(generation)
            console.log('range : ', range)
            const url = `https://pokeapi.co/api/v2/pokemon?offset=${range[0]}&limit=${range[1]}`
            console.log('url : ', url)
            pokemonsFromRange = await axios.get(url)
            await console.log(pokemonsFromRange.data.results.length)
        }
        finally{
            pokeResult = await getPokemons(pokemonsFromRange.data.results)
            setPokemons(pokeResult)
        }
    }

    return(
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{fontSize: 22, marginTop: 15, marginBottom: 15}}>{generation}th Generation</Text>
            {
                pokemons.length > 0 ?
                    <Text style={{fontSize: 16, marginTop: 5, marginBottom: 10}}>{pokemons.length} Pokemon</Text>
                :
                    <></>
            }
            <ScrollView contentContainerStyle={{flexGrow: 1, flexDirection: "row", flexWrap: "wrap", justifyContent: "space-evenly", alignContent: "center"}} 
                style={{flex : 1, alignContent : "center", padding: 5 }}
            >
            {
                pokemons.length > 0 ? 
                    pokemons.map(pokemon => 
                        <TouchableWithoutFeedback 
                            key={pokemon.id} 
                            onPress={() => navigation.navigate('PokemonDetails', {pokemon})}
                        >
                            <View         
                                style={{
                                    position: "relative",
                                    borderRadius: 10,
                                    padding: 5,
                                    width : 150, 
                                    height: 125,  
                                    margin: 5,
                                    flexGrow: 1,
                                    alignContent: "center", 
                                    backgroundColor: '#fff'
                                }}
                            >
                                <View style={{ flex: 1, padding: 5 }}>
                                    <Text style={{fontSize: 20, letterSpacing: 2, marginBottom: 10, textTransform: "capitalize"}}>{pokemon.name}</Text>
                                    {
                                        pokemon.types.map(t => 
                                            <Text key={t.slot} style={{marginLeft: 5, marginBottom: 5}}>{t.type.name}</Text>
                                        )
                                    }
                                </View>
                                <View style={{ width: 90, position: "absolute", right: 0, bottom: -5}}>
                                    <Image
                                        style={{ height : 100 }}
                                        source={{ uri: pokemon.sprites.front_default }}
                                    />
                                </View>
                            </View>
                        </TouchableWithoutFeedback>
                    )
                :
                <>
                <View style={{justifyContent : "center", alignItems: "center"}}>
                    <Spinner size='giant' status='info' style={{marginBottom : 20}} />
                    <Text style={{fontSize: 18, marginTop: 10}}> - Loading Pokemon - </Text>
                </View>
                </>
            }
            </ScrollView>
        </View>
    )
}

export default PokemonsPerGeneration