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
  SafeAreaView,
  StatusBar,
  View,
} from 'react-native';

import * as eva from '@eva-design/eva';
import { ApplicationProvider, Layout, Text } from '@ui-kitten/components';
import { default as theme } from './src/configs/custom-theme.json';
import AppNavigator from './src/navigations/bottomNavigation';

const HomeScreen = () => (
  <Layout style={{ marginTop : 20, flex: 1, justifyContent: 'center', alignItems: 'center'}}>
    <Text category='h1'>HOME</Text>
  </Layout>
);

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <View style={{flex : 1 , backgroundColor : 'red'}}>
          <ApplicationProvider {...eva} theme={{ ...eva.light, ...theme }}>  
            <AppNavigator /> 
          </ApplicationProvider>
      </View>
    </>
  );
};


export default App;
