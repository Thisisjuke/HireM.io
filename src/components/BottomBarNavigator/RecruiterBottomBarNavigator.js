import React from 'react';
import color from 'color';
import {createStackNavigator} from '@react-navigation/stack';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {useTheme} from 'react-native-paper';

import MyOffersScreen from '../../screens/Offers/MyOffers/MyOffersScreen';
import SingleOfferScreen from '../../screens/Offers/SingleOffer/SingleOfferScreen';
import UserProfileScreen from "../../screens/UserProfile/UserProfileScreen";
import CreateOfferScreen from '../../screens/Offers/CreateOffer/CreateOfferScreen';
import ListOfferScreen from '../../screens/Offers/ListOffer/ListOfferScreen';

const Tab = createMaterialBottomTabNavigator();
const OfferListStack = createStackNavigator();

function OfferListStackScreen() {
  return (
    <OfferListStack.Navigator>
      <OfferListStack.Screen
        name="ListOffers"
        component={ListOfferScreen}
        options={{tabBarVisible: false}}
      />
      <OfferListStack.Screen
        name="SingleOfferScreen"
        component={SingleOfferScreen}
      />
      <OfferListStack.Screen name="OffersScreen" component={MyOffersScreen} />
    </OfferListStack.Navigator>
  );
}

export const RecruiterBottomBarNavigation = () => {
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
      <Tab.Screen
        name="UserProfile"
        component={UserProfileScreen}
        options={{
          tabBarLabel: 'Profile',
          tabBarColor: tabBarColor,
          tabBarIcon: 'account-circle',
        }}
      />
    </Tab.Navigator>
  );
};

export default RecruiterBottomBarNavigation;
