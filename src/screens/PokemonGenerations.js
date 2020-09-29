import React from 'react'
import { View, Text, Button } from 'react-native'

const PokemonGenerations = ({navigation}) => {
    return(
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Generation Pokemon</Text>
            <Button
                title="Pokemons Per Generation"
                onPress={() => navigation.navigate('PokemonsPerGeneration')}
            />
        </View>
    )
}

export default PokemonGenerations