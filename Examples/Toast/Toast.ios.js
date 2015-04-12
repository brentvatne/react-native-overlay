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
    return (
      <Overlay isVisible={this.props.isVisible}>
        <BlurView style={styles.background} blurType="light">
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
  background: {
    flexDirection: 'row',
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
    marginTop: 15,
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
