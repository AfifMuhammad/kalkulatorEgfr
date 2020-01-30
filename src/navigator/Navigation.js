import React from 'react';
import { Container, Content, Text, Button, Header, Left, Title, Body, Right, Icon, Footer, FooterTab } from 'native-base';
import { createBottomTabNavigator, createStackNavigator, createAppContainer } from 'react-navigation';
import Home from '../pages/Home';
import Calculation from '../pages/Calculation';
import History from '../pages/History';
import About from '../pages/About';

export const AppNavigator = createBottomTabNavigator({
    Home: {
        screen: Home,
        navigationOptions: {
          tabBarLabel: 'Home',
          tabBarIcon: ({ tintColor }) => (
            <Icon name="apps" style={{color: tintColor}}/>
          ),
        }
    },
    Calculation: {
        screen: Calculation,
        navigationOptions: {
          tabBarLabel: 'Kalkulasi',
          tabBarIcon: ({ tintColor }) => (
            <Icon name="calculator" style={{color: tintColor}}/>
          ),
        }
    },
    History: {
        screen: History,
        navigationOptions: {
          tabBarLabel: 'Riwayat',
          tabBarIcon: ({ tintColor }) => (
            <Icon name="refresh" style={{color: tintColor}}/>
          ),
        }
    },
    About: {
        screen: About,
        navigationOptions: {
          tabBarLabel: 'Info',
          tabBarIcon: ({ tintColor }) => (
            <Icon name="information-circle-outline" style={{color: tintColor}}/>
          ),
        }
    },
},
{
    tabBarOptions: {
      activeTintColor: '#2680EB',
      inactiveTintColor: 'grey',
      style: {
        backgroundColor: 'white',
        alignItems:'center',
        justifyContent:'center',
        borderTopWidth: 0,
        height: 70,
        padding : 10,
        shadowOffset: { width: 5, height: 3 },
        shadowColor: '#2680EB',
        shadowOpacity: 0.5,
        elevation: 5
      }
    }
  });

const AppContainer = createAppContainer(AppNavigator);

export default AppContainer;