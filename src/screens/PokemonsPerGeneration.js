import React from 'react'
import { View, Text, Button } from 'react-native'

const PokemonsPerGeneration = ({navigation}) => {
    return(
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>ResultPokemons Pokemon</Text>
            <Button
                title="PokemonDetails"
                onPress={() => navigation.navigate('PokemonDetails')}
            />
        </View>
    )
}

export default PokemonsPerGeneration