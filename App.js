/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import AppContainer from './src/navigator/Navigation';
import { Root } from 'native-base';
import {name as appName} from './app.json';
import {AppRegistry } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <Root>
        <AppContainer/>
      </Root>
    );
  }
}

AppRegistry.registerComponent(appName, () => App);

