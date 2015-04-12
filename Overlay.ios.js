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
        <RNOverlay visible={true}>
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

module.exports = Overlay;
