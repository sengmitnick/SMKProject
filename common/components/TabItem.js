/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
} from 'react-native';

export default class TabItem extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image style={styles.img} source={this.props.img}/>
        <Text style={[styles.name,this.props.style]}>{this.props.name}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5
  },
  img: {
    flex: 1,
    width: 24,
    height: 24,
    resizeMode: 'contain'
  },
  name: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#999999'
  }
});
