import * as React from 'react';
import {RootStackParamList} from './types';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import HomeScreen from '@screens/Home';
import MovieScreen from '@screens/Movie';

const RootStack = createNativeStackNavigator<RootStackParamList>();

export default function Navigator() {
  return (
    <NavigationContainer>
      <RootStack.Navigator>
        <RootStack.Group screenOptions={{headerShown: false}}>
          <RootStack.Screen name="Home" component={HomeScreen} />
          <RootStack.Screen name="Movie" component={MovieScreen} />
        </RootStack.Group>
      </RootStack.Navigator>
    </NavigationContainer>
  );
}
