import EStyleSheet from 'react-native-extended-stylesheet';
import React, { Component } from 'react';

import Home from './screens/Home';

export default class App extends Component {
  render() {
    return (
      <Home />
    );
  }
}

EStyleSheet.build({
  $primaryBlue: '#4F6D7A',
  $white: '#FFFFFF',
  $lightGray: '#F0F0F0',
  $border: '#979797',
  $inputText: '#797979',
});
