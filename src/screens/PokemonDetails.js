import React from 'react'
import { View, Button, Text, Image, ScrollView, StyleSheet } from 'react-native'
import { Layout, Tab, TabView } from '@ui-kitten/components';
import MainLayout from '../layouts/MainLayout'

const PokemonDetails = ({route, navigation}) => {
    const { pokemon } = route.params
    const [selectedIndex, setSelectedIndex] = React.useState(0);

    console.log(pokemon)
    return(
        <MainLayout>
            <View style={{ flex: 1, position: "relative" }}>
            <View style={{backgroundColor: "coral", padding: 8, height: 300, zIndex: 0}}>
                <Text style={{fontSize: 32, textTransform: "capitalize", letterSpacing: 3, color: "#fff"}}>{pokemon.name}</Text>
                <Text style={{fontSize: 32, textTransform: "capitalize", letterSpacing: 3, color: "#fff"}}>#{pokemon.id}</Text>
                <View>
                    {
                        pokemon.types.map(t =>
                            <Text key={t.slot} style={{color: "#fff", marginTop: 5}}> {t.type.name}</Text>
                        )
                    }
                </View>  
            </View>  
           
            <Image
                style={{ position: "absolute", left: 90, top: 170,  width: 170, height: 170 ,justifyContent: 'center', alignItems: 'center',  zIndex: 1 }}
                
                source={{ uri: pokemon.sprites.front_default }} 
            /> 
           
            <ScrollView style={{backgroundColor: '#fff', borderTopLeftRadius: 30, borderTopRightRadius: 30, paddingTop: 70, paddingRight: 10, paddingLeft: 10, marginTop: -30, zIndex: 0}}>
                    <TabView
                        selectedIndex={selectedIndex}
                        onSelect={index => setSelectedIndex(index)}>
                        <Tab title='Stats'>
                            <Layout style={styles.tabContainer}>
                            <Text category='h5'>Stats</Text>
                            </Layout>
                        </Tab>
                        <Tab title='Evolutions'>
                            <Layout style={styles.tabContainer}>
                            <Text category='h5'>Evolutions</Text>
                            </Layout>
                        </Tab>
                        <Tab title='About'>
                            <Layout style={styles.tabContainer}>
                            <Text category='h5'>About</Text>
                            </Layout>
                        </Tab>
                    </TabView>
            </ScrollView>


            </View>
        </MainLayout>
    )
}

const styles = StyleSheet.create({
    tabContainer: {
      height: 64,
      alignItems: 'center',
      justifyContent: 'center',
    },
});

export default PokemonDetails