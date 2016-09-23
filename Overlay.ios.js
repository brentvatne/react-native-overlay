/**
 * @providesModule Overlay
 * @flow-weak
 */

'use strict';

import React, {Component, PropTypes} from 'react';
import {View, requireNativeComponent, StyleSheet} from 'react-native';

type Props = {
  isVisible: boolean;
}

class Overlay extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    var {
      isVisible,
    } = this.props;

    if (this.props.isVisible) {
      return (
        <RNOverlay isVisible={true} style={styles.container} pointerEvents="none" aboveStatusBar={this.props.aboveStatusBar}>
          {React.Children.map(this.props.children, React.cloneElement)}
        </RNOverlay>
      );
    } else {
      return <View />;
    }
  }
}

Overlay.propTypes = {
  /**
   * When this property is set to `true`, the Overlay will appear on
   * `UIWindowLevelStatusBar`, otherwise it will appear below that.
   */
  aboveStatusBar: PropTypes.bool,

  /**
   * Determines the visibility of the Overlay. When it is not visible,
   * an empty View is rendered.
   */
  isVisible: PropTypes.bool,
};

Overlay.defaultProps = {
  aboveStatusBar: false,
  isVisible: false,
}

var RNOverlay = requireNativeComponent('RNOverlay', Overlay);

var styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    borderWidth: 0,
    backgroundColor: 'transparent',
  },
})

module.exports = Overlay;
