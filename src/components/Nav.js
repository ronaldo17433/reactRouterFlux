import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

export default class Nav extends Component {
  render() {
    return (
        <View style={styles.nav}>
            <Text style={styles.navTex}>ATM Consultoria</Text>
        </View>
    );
  }
}
const styles = StyleSheet.create({
    nav: {
      padding: 10,
      height: 60,
      backgroundColor: '#8fbc8f'
    },
    navTex: {
      flex: 1,
      fontSize: 20,
      textAlign: 'center',
      color: '#FFF',
    }
  });