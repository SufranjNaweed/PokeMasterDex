import React from 'react'
import MainLayout from '../layouts/MainLayout'
import { View, Text, Image, Button, ScrollView } from 'react-native'
import { PokemonContext } from '../contexts/pokemon'


const SearchPokemon = ({ navigation }) => {
    return (
        <MainLayout>
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Search Pokemon</Text>
            <Button
                title="Pokemon Details"
                onPress={() => navigation.navigate('PokemonDetails')}
            />
        </View>
            {/* <SearchPokemon /> */}
            <ScrollView contentContainerStyle={{flexGrow: 1}} style={{flex : 1,  alignContent : "center"}}>
                {/* {
                    pokemons.length > 0 ? 
                        pokemons.map(pokemon => 
                            <View key={pokemon.id} style={{backgroundColor : "coral", flexDirection : "row", alignContent : "center", marginBottom: 10, padding: 10, borderRadius: 8}}>
                                <View>
                                    <Image 
                                        style={{width: 80, height: 80, backgroundColor: "white", borderRadius : 40}}
                                        source={{uri: pokemon.sprites.front_default}}
                                    />
                                </View>
                                <View style={{ flex : 1, justifyContent : "center", padding : 10}}>
                                    <Text>{pokemon.name}</Text>
                                    {
                                        pokemon.types.map(t => 
                                        <Text key={t.type.slot}>{t.type.name}</Text>
                                        )
                                    }
                                </View>
                            </View>    
                        )
                    :
                    <View style={{ flex : 1 , justifyContent : "center", alignItems:"center" }}>
                        <Spinner status='primary' size='giant'/>
                    </View>
                } */}
            </ScrollView>
        </MainLayout>
    )
}

export default SearchPokemon