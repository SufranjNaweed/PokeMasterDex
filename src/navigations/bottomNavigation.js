import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import PokemonDetails from '../screens/PokemonDetails'

// Screens - Tabs
import SearchPokemon from '../screens/SearchPokemon'
import SavedPokemon from '../screens/SavedPokemon'
import About from '../screens/About'

// Screens - PokeDex Stack
import GenerationPokemon from '../screens/PokemonGenerations'
import PokemonsPerGeneration from '../screens/PokemonsPerGeneration'

// STACKS

// Pokedex
const PokeDexStack = createStackNavigator();

function PokeDexStackScreen() {
  return (
    <PokeDexStack.Navigator>
      <PokeDexStack.Screen name="PokemonGenerations" component={GenerationPokemon} />
      <PokeDexStack.Screen name="PokemonsPerGeneration" component={PokemonsPerGeneration} />
      <PokeDexStack.Screen name="PokemonDetails" component={PokemonDetails}/>
    </PokeDexStack.Navigator>
  );
}

// Search Pokemon
const SearchStack = createStackNavigator();

function SearchStackScreen() {
  return (
    <SearchStack.Navigator>
      <SearchStack.Screen name="Search" component={SearchPokemon} />
      <SearchStack.Screen name="PokemonDetails" component={PokemonDetails}/>
    </SearchStack.Navigator>
  ) 
}

// Saved Pokemon
const SavedPokemonStack = createStackNavigator()

function SavedPokemonScreen(){
  return (
    <SavedPokemonStack.Navigator>
      <SavedPokemonStack.Screen name="Saved" component={SavedPokemon} />
      <SavedPokemonStack.Screen name="PokemonDetails" component={PokemonDetails} />
    </SavedPokemonStack.Navigator>
  )
}

// About
const AboutStack = createStackNavigator()

function AboutScreen(){
  return(
    <AboutStack.Navigator>
      <AboutStack.Screen name="About" component={About} />
    </AboutStack.Navigator>
  )
}

// TABS
const Tab = createBottomTabNavigator();

const TabNavigation = () => {
  return(
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="POKEDEX" component={PokeDexStackScreen} />
        <Tab.Screen name="SEARCH" component={SearchStackScreen} />
        <Tab.Screen name="SAVED" component={SavedPokemonScreen} />
        <Tab.Screen name="ABOUT" component={AboutScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}

export default TabNavigation