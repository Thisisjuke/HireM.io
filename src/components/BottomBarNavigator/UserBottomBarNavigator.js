import React from 'react';
import color from 'color';
import {createStackNavigator} from '@react-navigation/stack';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {useTheme} from 'react-native-paper';

import MyOffersScreen from '../../screens/Offers/MyOffers/MyOffersScreen';
import SingleOfferScreen from '../../screens/Offers/SingleOffer/SingleOfferScreen';
import CreateApplicationScreen from '../../screens/Applications/CreateApplication/CreateApplicationScreen';
import UserProfileScreen from '../../screens/UserProfile/UserProfileScreen';

const Tab = createMaterialBottomTabNavigator();

const OfferListStack = createStackNavigator();

function OfferListStackScreen() {
  return (
    <OfferListStack.Navigator>
      <OfferListStack.Screen name="OffersList" component={MyOffersScreen} />
      <OfferListStack.Screen
        name="SingleOfferScreen"
        component={SingleOfferScreen}
        options={{
          headerTitle: "Détails de l'offre",
          headerTitleStyle: {fontFamily: 'Poppins-Medium', paddingTop: 4},
        }}
      />
    </OfferListStack.Navigator>
  );
}

export const UserBottomBarNavigator = () => {
  const theme = useTheme();
  const tabBarColor = theme.colors.background;

  return (
    <Tab.Navigator
      initialRouteName="Feed"
      shifting={true}
      sceneAnimationEnabled={false}
      activeColor={theme.colors.primary}
      inactiveColor={color(theme.colors.primary)
        .alpha(0.6)
        .rgb()
        .string()}>
      <Tab.Screen
        name="Home"
        component={MyOffersScreen}
        options={{
          tabBarLabel: 'Mes offres',
          tabBarColor: tabBarColor,
          tabBarIcon: 'home-outline',
        }}
      />
      <Tab.Screen
        name="CreateApplication"
        component={CreateApplicationScreen}
        options={{
          tabBarLabel: 'Appliquer',
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
          tabBarIcon: 'account-circle-outline',
        }}
      />
    </Tab.Navigator>
  );
};

export default UserBottomBarNavigator;
