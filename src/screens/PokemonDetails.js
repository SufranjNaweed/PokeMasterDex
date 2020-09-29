import React from 'react'
import { View, Button, Text } from 'react-native'
import MainLayout from '../layouts/MainLayout'

const PokemonDetails = ({navigation}) => {
    return(
        <MainLayout>
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Generation Pokemon</Text>
                <Button
                    title="PokemonDetails"
                    onPress={() => console.log("screen details")}
                />
            </View>
        </MainLayout>
    )
}

export default PokemonDetails