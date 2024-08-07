import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeStack from './homeStack';
import About from '../screens/about';

const Drawer = createDrawerNavigator();

function RootDrawerNavigator() {
  return (
    <NavigationContainer>
      <Drawer.Navigator  initialRouteName="Home"
        screenOptions={{
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: 'lightgrey',
          },
        }}>
        <Drawer.Screen name="Home" component={HomeStack} />
        <Drawer.Screen name="About" component={About} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default RootDrawerNavigator;