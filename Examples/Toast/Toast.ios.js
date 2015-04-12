/**
 * @providesModule Toast
 * @flow
 */

var React = require('react-native');
var Overlay = require('react-native-overlay');
var BlurView = require('react-native-blur').BlurView;

var {
  View,
  ActivityIndicatorIOS,
  StyleSheet,
  TouchableOpacity,
} = React;

type Props = {
  isVisible: boolean;
}

var Toast = React.createClass({
  getDefaultProps(): Props {
    return {
      isVisible: false
    }
  },

  render(): ReactElement {
    return (
      <Overlay isVisible={this.props.isVisible}>
        <BlurView style={styles.background} blurType="dark">
          {this.props.children}
        </BlurView>
      </Overlay>
    );
  }
});

var styles = StyleSheet.create({
  background: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    justifyContent: 'center',
  },
})

module.exports = Toast;
