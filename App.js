/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import React from 'react';
import {
  StatusBar,
  View,
} from 'react-native';

import * as eva from '@eva-design/eva';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components';
import { default as theme } from './src/configs/custom-theme.json';
import PokemonContextProvider from './src/contexts/pokemon'
import TabNavigation from './src/navigations/bottomNavigation';

const App = () => {
  return (
    <>
      <StatusBar backgroundColor="#FFF" barStyle="dark-content" />
      <View style={{flex : 1 , backgroundColor : 'red'}}>
          <IconRegistry icons={EvaIconsPack} />
          <ApplicationProvider {...eva} theme={{ ...eva.light, ...theme }}>
            <PokemonContextProvider>
              <TabNavigation /> 
            </PokemonContextProvider>
          </ApplicationProvider>
      </View>
    </>
  );
};


export default App;
