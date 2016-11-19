/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import UIExplorerPage from './UIExplorerPage';

export default class UserPage extends Component {
  render() {
    return (
      <UIExplorerPage title="个人中心" noSpacer={false} noScroll={false}>
        <Text>I am the UserPage component</Text>
      </UIExplorerPage>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
