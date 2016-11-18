'use strict'
import React, { Component } from 'react';
import { Image, Text, View } from 'react-native';

class Greeting extends Component {
  render() {
    return (
      <Text>Hello {this.props.name}!</Text>
    );
  }
}

export default function () {
  return (
    <View style={{alignItems: 'center'}}>
      <Greeting name='Rexxar' />
      <Greeting name='Jaina' />
    </View>
  );
}
