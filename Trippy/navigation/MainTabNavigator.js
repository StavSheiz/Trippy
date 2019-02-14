import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon.js';
import HomeScreen from '../screens/HomeScreen.js';
import InterestsScreen from '../screens/InterestsScreen.js';
import SettingsScreen from '../screens/SettingsScreen.js';
import Trips from '../screens/Trips.js';
import PartnerScreen from '../screens/PartnerScreen.js'
import TripScreen from '../screens/TripScreen';
import NewTripScreen from '../screens/NewTripScreen.js';

const PartnerStack = createStackNavigator({
  Partner: PartnerScreen,
});

PartnerStack.navigationOptions = {
  tabBarLabel: 'Partner',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-information-circle${focused ? '' : '-outline'}`
          : 'md-information-circle'
      }
    />
  ),
};

const HomeStack = createStackNavigator({
  Home: HomeScreen,
});

HomeStack.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-information-circle${focused ? '' : '-outline'}`
          : 'md-information-circle'
      }
    />
  ),
};

const NewTripStack = createStackNavigator({
  NewTrip: NewTripScreen,
});

NewTripStack.navigationOptions = {
  tabBarLabel: 'NewTrip',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-information-circle${focused ? '' : '-outline'}`
          : 'md-information-circle'
      }
    />
  ),
};

const TripsStack = createStackNavigator({
  Trips: Trips,
});

TripsStack.navigationOptions = {
  tabBarLabel: 'Trips',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-information-circle${focused ? '' : '-outline'}`
          : 'md-information-circle'
      }
    />
  ),
};

const InterestsStack = createStackNavigator({
  Interests: InterestsScreen,
});

InterestsStack.navigationOptions = {
  tabBarLabel: 'Interests',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-link' : 'md-link'}
    />
  ),
};

const SettingsStack = createStackNavigator({
  Settings: TripScreen,
});

SettingsStack.navigationOptions = {
  tabBarLabel: 'Settings',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'}
    />
  ),
};

export default createBottomTabNavigator({
  NewTripStack,
  PartnerStack,
  HomeStack,
  InterestsStack,
  SettingsStack,
  TripsStack
});
