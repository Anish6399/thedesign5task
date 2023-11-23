import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FeedScreen from './Components/FeedScreen';
import AddPostScreen from './Components/AddPostScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Feed">
        <Stack.Screen name="Feed" component={FeedScreen} />
        <Stack.Screen name="AddPost" component={AddPostScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;