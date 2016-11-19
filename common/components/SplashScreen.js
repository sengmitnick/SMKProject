'use strict'

import React, { Component } from 'react';
import FadeInView from './FadeInView';
import { Image, StatusBar, StyleSheet, Text, View } from 'react-native';

class SplashScreen extends Component {
  render () {
    let splashView = (
      <View style={styles.container}>
        <StatusBar hidden={true} />
        <View style={styles.container}>
          <Image style={styles.img} source={require('../../image/logo.png')}/>
          <Text style={styles.appName}>我の智家</Text>
        </View>
        <View style={styles.appInfo}>
          <Text>Copyright © 1999-2016, SMK17.CN</Text>
          <Text>All Rights Reserved </Text>
        </View>
      </View>
    );
    return (
      <FadeInView children={splashView} />
     );
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff'
  },
  img: {
    width: 144,
    height: 144,
    resizeMode: 'contain'
  },
  appName: {
    fontSize: 28
  },
  appInfo: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    margin: 20
  }
})

module.exports = SplashScreen
