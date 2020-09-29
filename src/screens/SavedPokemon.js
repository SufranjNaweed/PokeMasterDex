import React, {useState, useEffect}  from 'react'
import MainLayout from '../layouts/MainLayout'
import { Text, Button } from 'react-native'

const SavedPokemon = ({ navigation }) => {
    return(
        <MainLayout>
            <Text category="h1" style={{textAlign : "center", marginBottom : 10, marginTop : 10 }}>Saved Pokemon</Text>
            <Button
                title="Pokemon Details"
                onPress={() => navigation.navigate('PokemonDetails')}
            />
        </MainLayout>
    )
}

export default SavedPokemon