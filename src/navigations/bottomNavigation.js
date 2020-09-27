import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { BottomNavigation, BottomNavigationTab, Icon } from '@ui-kitten/components'

import PokeMasterDex from '../screens/PokeMasterDex'
import About from '../screens/About'

const {Navigator, Screen} = createBottomTabNavigator();

const PokeMasterDexIcon = (props) => (
  <Icon {...props} name='compass-outline' />
)

const AboutIcon = (props) => (
  <Icon {...props} name="info-outline" />
)

const BottomTabBar = ({navigation, state}) => (
  <BottomNavigation
    selectedIndex={state.index}
    onSelect={(index) => navigation.navigate(state.routeNames[index])}>
    <BottomNavigationTab title="POKE MASTER DEX" icon={PokeMasterDexIcon} />
    <BottomNavigationTab title="ABOUT" icon={AboutIcon} />
  </BottomNavigation>
);

const TabNavigator = () => (
  <Navigator tabBar={(props) => <BottomTabBar {...props} />}>
    <Screen name="PokeMasterDex" component={PokeMasterDex} />
    <Screen name="About" component={About} />
  </Navigator>
);

const AppNavigator = () => (
  <NavigationContainer>
    <TabNavigator />
  </NavigationContainer>
);

export default AppNavigator