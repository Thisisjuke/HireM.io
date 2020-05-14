import React, {useContext} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

import LoginScreen from '../screens/LoginScreen/LoginScreen';
import IdleScreen from '../screens/IdleScreen/IdleScreen';
import BottomBarNavigator from '../components/BottomBarNavigator/BottomBarNavigator';

import {isSignedIn} from '../services/Auth';
import {AuthContext} from '../contexts/AuthContext';

const Stack = createStackNavigator();

const navigation = () => {
  const [authenticated, setAuthenticated] = useContext(AuthContext);
  isSignedIn().then(res => setAuthenticated(!!res));

  return (
    <NavigationContainer>
      {authenticated === null ? (
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}>
          <Stack.Screen name="Idle" component={IdleScreen} />
        </Stack.Navigator>
      ) : authenticated ? (
        <BottomBarNavigator />
      ) : (
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}>
          <Stack.Screen name="Login" component={LoginScreen} />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
};

export default navigation;
