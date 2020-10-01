import React from 'react'
import { View, Button } from 'react-native'
import { Card, Text } from '@ui-kitten/components'
import MainLayout from '../layouts/MainLayout'

const PokemonGenerations = ({navigation}) => {
    const generations = [
        {
            id : 1,
            name : "Generation 1",
        },
        {
            id : 2,
            name : "Generation 2",
        },
        {
            id : 3,
            name : "Generation 3",
        },
        {
            id : 4,
            name : "Generation 4",
        },

        {
            id : 5,
            name : "Generation 5",
        },

        {
            id : 6,
            name : "Generation 6",
        },
        {
            id : 7,
            name : "Generation 7",
        },
        {
            id : 8,
            name : "Generation 8",
        },
    ]

    return(
        <MainLayout>
            <Text style={{textAlign : 'center', margin: 10, fontSize: 28, letterSpacing: 2}}>Choose a Generation</Text>
            <View style={{flex : 1, flexDirection: "row", flexWrap: 'wrap',alignContent: 'center', justifyContent: 'space-evenly'}}>
                {
                    generations.map(generation => 
                        <Card 
                            key={generation.id} style={{height : 100, margin: 10, alignContent: "center" }} 
                            onPress={() => navigation.navigate('PokemonsPerGeneration', {generation : generation.id})}
                        > 
                            <Text>{generation.name}</Text>
                        </Card>
                    )
                }
            </View>
        </MainLayout>
    )
}

export default PokemonGenerations