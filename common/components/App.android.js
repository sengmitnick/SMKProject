'use strict'
import React, { Component } from 'react';
import SplashScreen from './SplashScreen';
import FadeInView from './FadeInView';
import Main from './Main';
import { Image, Text, View } from 'react-native';

export default class App extends Component {
  componentDidMount() {
    this.timer = setTimeout(
      () => { this.setState({splashed: true}); },
      2000
    );
  }
  componentWillUnmount() {
    // 如果存在this.timer，则使用clearTimeout清空。
    // 如果你使用多个timer，那么用多个变量，或者用个数组来保存引用，然后逐个clear
    this.timer && clearTimeout(this.timer);
  }
  constructor(props) {
    super(props);
    this.state = { splashed: false };
  }
  render () {
    if (this.state.splashed){
      return (
        <Main />
      );
    }else{
      return (
        <SplashScreen />
      );
    }
  }
}
