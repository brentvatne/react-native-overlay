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

type Props = {
  isVisible: boolean;
}

var Overlay = React.createClass({
  getDefaultProps(): Props {
    return {
      isVisible: false,
    }
  },

  render() {
    var {
      isVisible,
    } = this.props;

    if (this.props.isVisible) {
      return (
        <RNOverlay visible={true} style={styles.container} pointerEvents="none">
          {React.Children.map(this.props.children, React.addons.cloneWithProps)}
        </RNOverlay>
      );
    } else {
      return <View />;
    }
  },
});

var RNOverlay = createReactIOSNativeComponentClass({
  validAttributes: merge(ReactIOSViewAttributes.UIView, {visible: true}),
  uiViewClassName: 'RNOverlay',
});

var styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
})

module.exports = Overlay;
