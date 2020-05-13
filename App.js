/**
 * @format
 * @flow strict-local
 */

import 'react-native-gesture-handler';

import React, {useEffect} from 'react';
import {exact} from 'prop-types';

import {
  configureFonts,
  DefaultTheme,
  Provider as PaperProvider,
} from 'react-native-paper';
import RNBootSplash from 'react-native-bootsplash';

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
    background: '#fafafb',
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
  useEffect(() => {
    RNBootSplash.hide({duration: 250});
  }, []);
  return (
    <PaperProvider theme={theme}>
      <AuthProvider>
        <UserProvider>
          <Navigation />
          <FlashMessage floating={true} duration={3000} />
        </UserProvider>
      </AuthProvider>
    </PaperProvider>
  );
};

export default App;
