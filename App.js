/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import 'react-native-gesture-handler';
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';

import Navigation from "./src/navigation";
import { UserProvider } from "./src/contexts/UserContext";

const App: () => React$Node = () => {
  return (
    <UserProvider>
      <NavigationContainer>
        <Navigation />
      </NavigationContainer>
    </UserProvider>
  );
};

export default App;
