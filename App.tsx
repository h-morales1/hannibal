/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import SafeAreaView from 'react-native-safe-area-view';
import * as React from 'react';
import { Text, View , StatusBar} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import {TailwindProvider} from 'tailwind-rn';
import utilities from './tailwind.json';

import { MaterialCommunityIcons } from '@expo/vector-icons';

import AddRecipe from "./screens/addRecipe/AddRecipe";
import ListRecipe from "./screens/listRecipe/ListRecipe";

function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home!</Text>
    </View>
  );
}

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
    </View>
  );
}

const Tab = createMaterialBottomTabNavigator();

export default function App() {
  return (
<TailwindProvider utilities={utilities}>
    <NavigationContainer>
        <StatusBar backgroundColor="#F7F7F8" barStyle="dark-content" />
      <Tab.Navigator
  activeColor="#EA580C"
  inactiveColor="#999DAD"
  barStyle={{ backgroundColor: '#F7F7F8' }}
      >
        <Tab.Screen name="Home" component={ListRecipe}
        options={{
          tabBarLabel: 'Home',

        }}
        />
        <Tab.Screen name="Add Recipe" component={AddRecipe}
        />
      </Tab.Navigator>
    </NavigationContainer>
</TailwindProvider>
  );
}
