'use strict'
import React, { Component } from 'react';
import { Text,
    View,
    StyleSheet,
    StatusBar,
    Dimensions,
    ScrollView,
    TouchableOpacity,
    Navigator } from 'react-native';
import MyDevicePage from './MyDevicePage';
import UserPage from './UserPage';
import TabItem from './TabItem';

var WINDOW_WIDTH = Dimensions.get('window').width;


export default class Main extends Component {
  constructor(props, context) {
    super(props, context)
    this.tabarRef = null
    this.state = {
      tab: 'myDevice'
    }
  }

  onTabSelect(tab) {
    this.setState({ tab })
  }

  renderTabs() {
    const { tab } = this.state
    let myDevice
    let user
    switch(tab) {
      case 'myDevice':
        myDevice = <TabItem style={{color: '#44A45E'}} name='我的设备' img={require('../../image/icon_home_HL.png')} />
        user = <TabItem style={{color: '#999999'}} name='个人中心' img={require('../../image/icon_account.png')} />
        break
      case 'user':
        myDevice = <TabItem style={{color: '#999999'}} name='我的设备' img={require('../../image/icon_home.png')} />
        user = <TabItem style={{color: '#44A45E'}} name='个人中心' img={require('../../image/icon_account_HL.png')} />
        break
    }
    return (
      <View style={styles.tabItemContainer}>
        <TouchableOpacity activeOpacity={1} style={styles.tabItem} onPress={() => this.onTabSelect('myDevice')}>
          {myDevice}
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={1} style={styles.tabItem}  onPress={() => this.onTabSelect('user')}>
          {user}
        </TouchableOpacity>
      </View>
    )
  }

  renderContent() {
    const { tab } = this.state
    let content
    switch(tab) {
      case 'myDevice':
        content = <MyDevicePage />
        break
      case 'user':
        content = <UserPage />
        break
    }
    return content
  }

  render () {
    return (
      <View style={styles.container}>
        <View style={styles.container}>
          {this.renderContent()}
        </View>
        {this.renderTabs()}
      </View>

    );
  }

}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  tabItemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: 48,
    borderTopWidth: 1,
    backgroundColor: '#F5F5F5',
    borderTopColor: '#F5F5F5'
  },
  tabItem: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
})
