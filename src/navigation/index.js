import React, { useContext } from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import LoginScreen from "../screens/LoginScreen";
import HomeScreen from "../screens/HomeScreen";
import IdleScreen from "../screens/IdleScreen";

import { isSignedIn } from "../services/Auth"
import { UserContext } from "../contexts/UserContext";

const Stack = createStackNavigator();

const navigation = () => {
  const [authenticated, setAuthenticated] = useContext(UserContext);

  isSignedIn().then(res => setAuthenticated(!!res))

  return(
      <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}
      >
        {
          authenticated === null ? (
            <>
              <Stack.Screen name="Idle" component={IdleScreen} />
            </>
          ) : (
            authenticated ? (
                <>
                  <Stack.Screen name="Home" component={HomeScreen} />
                </>
              ) : (
                <>
                  <Stack.Screen name="Login" component={LoginScreen}/>
                </>
            )
          )
        }
      </Stack.Navigator>
  );
};

export default navigation;
