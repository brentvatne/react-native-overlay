'use strict';

var React = require('react-native');
var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
} = React;

var LoadingOverlay = require('./LoadingOverlay.ios');

var LoadingOverlayExampleApp = React.createClass({
  render: function() {
    return (
      <View style={styles.container}>

        <Image source={require('image!announcement')} style={styles.image} />

        { /* It doesn't matter where we put this component */ }
        <LoadingOverlay isVisible={true} />

      </View>
    );
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    resizeMode: 'cover',
    height: require('Dimensions').get('window').height,
    width: require('Dimensions').get('window').width,
  }
});

AppRegistry.registerComponent('LoadingOverlayExampleApp', () => LoadingOverlayExampleApp);
