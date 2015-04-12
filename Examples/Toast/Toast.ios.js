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
  Text,
} = React;

type Props = {
  isVisible: boolean;
}

var Toast = React.createClass({
  render(): ReactElement {
    var positionStyle;

    if (this.props.position == 'top' || !this.props.position) {
      positionStyle = styles.top;
    } else {
      positionStyle = styles.bottom;
    }

    return (
      <Overlay isVisible={this.props.isVisible} aboveStatusBar={false}>
        <BlurView style={positionStyle} blurType="light">
          <View style={styles.content}>
            {this.props.children}
          </View>

          <TouchableOpacity onPress={this.props.onDismiss}>
            <View style={styles.dismissButton}>
              <Text style={styles.dismissButtonText}>Okay</Text>
            </View>
          </TouchableOpacity>
        </BlurView>
      </Overlay>
    );
  }
});

var styles = StyleSheet.create({
  top: {
    paddingTop: 15,
    flexDirection: 'row',
    alignItems: 'center',
  },
  bottom: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: 'row',
    alignItems: 'center',
  },
  content: {
    flex: 9,
  },
  dismissButton: {
    flex: 1,
    backgroundColor: '#eeeeee',
    paddingLeft: 10,
    paddingRight: 10,
    borderRadius: 5,
    justifyContent: 'center',
    height: 30,
    marginRight: 15,
    alignItems: 'center',
  },
  dismissButtonText: {
    color: '#888888',
    fontSize: 12,
  },
})

module.exports = Toast;
