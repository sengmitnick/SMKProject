import React from 'react';
import {
    View,
    Text,
    TouchableWithoutFeedback,
    StyleSheet,
    RefreshControl
} from 'react-native';
import UIExplorerPage from './UIExplorerPage';
import TabItem from './TabItem';

export default class MyDevicePage extends React.Component {
  constructor(props, context) {
    super(props, context)
    this.state = { isRefreshing: false }
    this.timer = null
  }
  _onRefresh() {
    this.setState({ isRefreshing: true });
    this.timer = setTimeout(
      () => { this.setState({isRefreshing: false}); },2000);
  }
  componentWillUnmount() {
    this.timer && clearTimeout(this.timer);
  }
  render() {
    let txt = this.state.isRefreshing ? 'true' : 'false'
    let refresh = <RefreshControl
            refreshing={this.state.isRefreshing}
            onRefresh={() => this._onRefresh()}
            tintColor="#ff0000"
            title="Loading..."
            titleColor="#00ff00"
            colors={['#ff0000', '#00ff00', '#0000ff']}
            progressBackgroundColor="#ffff00"/>
    return (
      <UIExplorerPage title="我的设备"
        noSpacer={false}
        noScroll={false}
        refresh={refresh}>
        <Text>isRefreshing is {txt}</Text>
      </UIExplorerPage>
    );
  }
}
const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    height: 222,
    backgroundColor: 'white'
  }
})
