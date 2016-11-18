'use strict'
import React, { Component } from 'react';
import { StyleSheet, View, Animated } from 'react-native';

class FadeInView extends Component {
   constructor(props) {
     super(props);
     this.state = {
       fadeAnim: new Animated.Value(0), // init opacity 0
     };
   }
   componentDidMount() {
     Animated.timing(          // Uses easing functions
       this.state.fadeAnim,    // The value to drive
       {toValue: 1},           // Configuration
     ).start();                // Don't forget start!
   }
   render() {
     return (
       <Animated.View style={[styles.container,{opacity: this.state.fadeAnim}]}>
         {this.props.children}
       </Animated.View>
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
   }
 })

 module.exports = FadeInView
