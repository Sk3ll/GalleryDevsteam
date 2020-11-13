import React from 'react';
import { NavigationContainer } from './node_modules/@react-navigation/native';
import { createStackNavigator } from './node_modules/@react-navigation/stack';
import ListsScreen from './src/components/listsScreen'
import PhotoScreen from './src/components/photoScreen';

const Stack = createStackNavigator();

const App: () => React$Node = () => {
  return (
  <NavigationContainer>
    <Stack.Navigator initialRouteName="ListsScreen" >
      <Stack.Screen name="Gallery" component={ListsScreen} />
      <Stack.Screen options={{headerShown: false}} name="Photo" component={PhotoScreen} />
    </Stack.Navigator>
  </NavigationContainer>
  )
};

export default App;
