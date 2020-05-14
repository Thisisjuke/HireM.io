import React from 'react';
import color from 'color';
import {createStackNavigator} from '@react-navigation/stack';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {useTheme, Portal, FAB} from 'react-native-paper';
import {useIsFocused} from '@react-navigation/native';

import LoginScreen from '../../screens/LoginScreen/LoginScreen';
import MyOffersScreen from '../../screens/Offers/MyOffers/MyOffersScreen';
import SingleOfferScreen from '../../screens/Offers/SingleOffer/SingleOfferScreen';
import IdleScreen from '../../screens/IdleScreen/IdleScreen';

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

// À changer en fonction du type d'utilisateur

export const BottomBarNavigator = () => {
  const theme = useTheme();
  const isFocused = useIsFocused();
  const tabBarColor = theme.colors.background;

  return (
    <>
      <Tab.Navigator
        initialRouteName="Accueil"
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
          name="OffersList"
          component={MyOffersScreen}
          options={{
            tabBarLabel: 'Mes offres',
            tabBarColor: tabBarColor,
            tabBarIcon: 'format-list-bulleted',
          }}
        />
        <Tab.Screen
          name="Login"
          component={IdleScreen}
          options={{
            tabBarLabel: 'Créer une offre',
            tabBarColor: tabBarColor,
            tabBarIcon: 'email-outline',
          }}
        />
      </Tab.Navigator>
      <Portal>
        <FAB
          visible={isFocused}
          icon="feather"
          style={{
            position: 'absolute',
            bottom: safeArea.bottom + 65,
            right: 16,
          }}
        />
      </Portal>
    </>
  );
};

export default BottomBarNavigator;
