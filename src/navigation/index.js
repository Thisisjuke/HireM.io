import React, { useState } from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import LoginScreen from "../screens/LoginScreen";
import HomeScreen from "../screens/HomeScreen";
import IdleScreen from "../screens/IdleScreen";

import { isSignedIn } from "../services/Auth"

const Stack = createStackNavigator();

const navigation = () => {
  const [isLogged, setLogged] = useState(null);

  isSignedIn().then(res => setLogged(!!res))

  return(
      <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}
      >
        {
          isLogged === null ? (
            <>
              <Stack.Screen name="Idle" component={IdleScreen} />
            </>
          ) : (
            isLogged ? (
                <>
                  <Stack.Screen name="Home" component={HomeScreen} />
                </>
              ) : (
                <>
                  <Stack.Screen name="Login" component={LoginScreen} />
                </>
            )
          )
        }
      </Stack.Navigator>
  );
};

export default navigation;
