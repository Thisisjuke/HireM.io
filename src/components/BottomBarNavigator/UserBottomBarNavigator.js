import React from 'react';
import color from 'color';
import {createStackNavigator} from '@react-navigation/stack';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {useTheme} from 'react-native-paper';

import MyOffersScreen from '../../screens/Offers/MyOffers/MyOffersScreen';
import SingleOfferScreen from '../../screens/Offers/SingleOffer/SingleOfferScreen';
import CreateOfferScreen from '../../screens/Offers/CreateOffer/CreateOfferScreen';

const Tab = createMaterialBottomTabNavigator();

const OfferListStack = createStackNavigator();

function OfferListStackScreen() {
  return (
    <OfferListStack.Navigator>
      <OfferListStack.Screen name="OffersList" component={MyOffersScreen} />
      <OfferListStack.Screen
        name="SingleOfferScreen"
        component={SingleOfferScreen}
      />
    </OfferListStack.Navigator>
  );
}

export const UserBottomBarNavigator = () => {
  const theme = useTheme();
  const tabBarColor = theme.colors.background;

  return (
    <Tab.Navigator
      initialRouteName="Home"
      shifting={true}
      sceneAnimationEnabled={false}
      activeColor={theme.colors.primary}
      inactiveColor={color(theme.colors.primary)
        .alpha(0.6)
        .rgb()
        .string()}>
      <Tab.Screen
        name="Home"
        component={OfferListStackScreen}
        options={{
          tabBarLabel: 'Accueil',
          tabBarColor: tabBarColor,
          tabBarIcon: 'home',
        }}
      />
      <Tab.Screen
        name="Login"
        component={CreateOfferScreen}
        options={{
          tabBarLabel: 'Créer une offre',
          tabBarColor: tabBarColor,
          tabBarIcon: 'email-outline',
        }}
      />
    </Tab.Navigator>
  );
};

export default UserBottomBarNavigator;
