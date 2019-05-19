import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import LinksScreen from '../screens/LinksScreen';
import ArticleDetails from '../screens/ArticleDetails';

const HomeStack = createStackNavigator({
  Home: HomeScreen,
  ArticleDetails: ArticleDetails,
});

HomeStack.navigationOptions = {
  tabBarOptions: {
    showLabel: false,
    style: {
      height: 40,
    },
  },
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-home${focused ? '' : '-outline'}`
          : 'md-home'
      }
    />
  ),
};

const LinksStack = createStackNavigator({
  Links: LinksScreen,
});

LinksStack.navigationOptions = {
  tabBarOptions: {
    showLabel: false,
    style: {
      height: 40,
    },
  },
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? `ios-analytics${focused ? '' : '-outline'}` : 'md-analytics'}
    />
  ),
};


export default createBottomTabNavigator({
  HomeStack,
  LinksStack,
});
