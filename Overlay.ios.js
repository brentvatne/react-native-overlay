/**
 * @providesModule Overlay
 * @flow
 */

'use strict';

var createReactIOSNativeComponentClass = require('createReactIOSNativeComponentClass');
var ReactIOSViewAttributes = require('ReactIOSViewAttributes');
var merge = require('merge');

var React = require('react-native');
var {
  View,
  PropTypes,
  StyleSheet,
} = React;

var Overlay = React.createClass({
  propTypes: {
    isVisible: PropTypes.bool,
  },

  render() {
    var {
      isVisible,
    } = this.props;

    if (this.props.isVisible) {
      return (
        <RNOverlay visible={true} style={styles.container}>
          {React.Children.map(this.props.children, React.addons.cloneWithProps)}
        </RNOverlay>
      );
    } else {
      return <View />;
    }
  },
});

var styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'transparent',
    justifyContent: 'center',
  },
})

var RNOverlay = createReactIOSNativeComponentClass({
  validAttributes: merge(ReactIOSViewAttributes.UIView, {visible: true}),
  uiViewClassName: 'RNOverlay',
});

module.exports = Overlay;
