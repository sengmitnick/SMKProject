'use strict'
import React, { Component } from 'react';
import { Text,
    View,
    StyleSheet,
    StatusBar,
    ToolbarAndroid,
    Navigator } from 'react-native';



export default function () {
  let defaultName = 'FirstPageComponent';
  let defaultComponent = MyDevicePage;
  return (
    <View style={styles.container}>
      <StatusBar translucent={true} backgroundColor={"#44A45E"} barStyle="light-content"/>
      <ToolbarAndroid title="我の智家"/>

    </View>
  );
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff'
  }
})
