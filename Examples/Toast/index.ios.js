/**
 * @providesModule ToastExampleApp
 * @flow
 */

'use strict';

var React = require('react-native');
var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  AlertIOS,
} = React;

var Toast = require('./Toast.ios');

var ToastExampleApp = React.createClass({
  getInitialState(): any {
    return {isTopToastVisible: true, isBottomToastVisible: true};
  },

  hideTopToast() {
    this.setState({isTopToastVisible: false});
  },

  hideBottomToast() {
    this.setState({isBottomToastVisible: false});
  },

  render() {
    return (
      <View style={styles.container}>
        { /* It doesn't matter where we put this component */ }
        <Toast isVisible={this.state.isBottomToastVisible} onDismiss={this.hideBottomToast} position="bottom">
          <TouchableOpacity onPress={() => { AlertIOS.alert('Pressed on text!') }}>
            <Text style={styles.toastText}>This message is easy to display and dismiss! Write as much as you want to, also! It will just flow down.</Text>
          </TouchableOpacity>
        </Toast>

        <TouchableOpacity onPress={() => { AlertIOS.alert('Pressed on image!') }}>
          <Image source={require('image!announcement')} style={styles.image} />
        </TouchableOpacity>

        { /* It doesn't matter where we put this component */ }
        <Toast isVisible={this.state.isTopToastVisible} onDismiss={this.hideTopToast} position="top">
          <TouchableOpacity onPress={() => { AlertIOS.alert('Pressed on text!') }}>
            <Text style={styles.toastText}>This message is easy to display and dismiss! Write as much as you want to, also! It will just flow down.</Text>
          </TouchableOpacity>
        </Toast>
      </View>
    );
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  toastText: {
    color: '#ffffff',
    padding: 15,
    backgroundColor: 'transparent',
    fontSize: 14,
  },
  image: {
    resizeMode: 'cover',
    width: 800,
    height: 800,
  }
});

AppRegistry.registerComponent('ToastExampleApp', () => ToastExampleApp);
