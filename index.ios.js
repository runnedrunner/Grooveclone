'use strict';
var React = require('react');
var ReactNative = require('react-native');

var styles = ReactNative.StyleSheet.create({
  text: {
    color: 'red',
    backgroundColor: 'pink',
    fontSize: 30,
    margin: 80
  }
});

class PropertyFinderApp extends React.Component {
  render() {
    return React.createElement(ReactNative.Text, {style: styles.text}, "Hello Austin!! I am your Monster, GrooveClone! ");
  }
}

ReactNative.AppRegistry.registerComponent('PropertyFinder', function() { return PropertyFinderApp });
