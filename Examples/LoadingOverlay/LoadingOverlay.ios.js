/**
 * @providesModule LoadingOverlay
 * @flow
 */

var React = require('react-native');
var Overlay = require('react-native-overlay');
var BlurView = require('react-native-blur').BlurView;

var {
  View,
  ActivityIndicatorIOS,
  StyleSheet,
} = React;

var LoadingOverlay = React.createClass({
  getDefaultProps(): StateObject {
    return {
      isVisible: false
    }
  },

  render(): ReactElement {
    return (
      <Overlay isVisible={this.props.isVisible}>
        <BlurView style={styles.background} blurType="dark">
          <ActivityIndicatorIOS
            size="large"
            animating={true}
            style={styles.spinner} />
        </BlurView>
      </Overlay>
    );
  }
});

var styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
  },
})

module.exports = LoadingOverlay;
