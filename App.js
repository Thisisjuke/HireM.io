/**
 * @format
 * @flow strict-local
 */

import 'react-native-gesture-handler';

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {
  configureFonts,
  DefaultTheme,
  Provider as PaperProvider,
} from 'react-native-paper';
import {exact} from 'prop-types';

const fontConfig = {
  default: {
    regular: {
      fontFamily: 'Poppins-Regular',
      fontWeight: '400',
    },
    medium: {
      fontFamily: 'Poppins-Medium',
      fontWeight: '500',
    },
    light: {
      fontFamily: 'Poppins-Light',
      fontWeight: '300',
    },
    thin: {
      fontFamily: 'Poppins-Thin',
      fontWeight: '200',
    },
  },
};

const theme = {
  ...DefaultTheme,
  dark: false,
  mode: exact,
  roundness: 8,
  colors: {
    ...DefaultTheme.colors,
    primary: '#0062ff',
    accent: '#50b5ff',
    background: '#000000',
    text: '#171725',
    placeholder: '#b5b5be',
  },
  fonts: configureFonts(fontConfig),
};

import Navigation from './src/navigation';
import {AuthProvider} from './src/contexts/AuthContext';
import {UserProvider} from './src/contexts/UserContext';
import FlashMessage from 'react-native-flash-message';

const App: () => React$Node = () => {
  return (
    <PaperProvider theme={theme}>
      <AuthProvider>
        <UserProvider>
          <NavigationContainer>
            <Navigation />
          </NavigationContainer>
          <FlashMessage floating={true} duration={3000} />
        </UserProvider>
      </AuthProvider>
    </PaperProvider>
  );
};

export default App;
