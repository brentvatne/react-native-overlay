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
  render: function() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={() => { AlertIOS.alert('Pressed on image!') }}>
          <Image source={require('image!announcement')} style={styles.image} />
        </TouchableOpacity>

        { /* It doesn't matter where we put this component */ }
        <Toast isVisible={true}>
          <TouchableOpacity onPress={() => { AlertIOS.alert('Pressed on text!') }}>
            <Text style={styles.toastText}>Hello there!</Text>
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
    padding: 10,
  },
  image: {
    resizeMode: 'cover',
    height: require('Dimensions').get('window').height,
    width: require('Dimensions').get('window').width,
  }
});

AppRegistry.registerComponent('ToastExampleApp', () => ToastExampleApp);
