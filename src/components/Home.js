import React, {Component} from 'react';
import {Platform, StyleSheet, Image, View, TouchableHighlight} from 'react-native';
import {Actions} from 'react-native-router-flux';
import Nav from './Nav';

const logo = require('../images/logo.png');
const menuCliente = require('../images/menu_cliente.png');
const menuContato = require('../images/menu_contato.png');
const menuEmpresa = require('../images/menu_empresa.png');
const menuServico = require('../images/menu_servico.png');

export default class Home extends Component {
  render() {
    return (
        <View>
            <Nav />
            <View style={styles.logo}>
                <Image source={logo} />
            </View>
            <View style={styles.menu}>
                <View style={styles.menuRow}>
                <TouchableHighlight onPress={() => {Actions.empresa()}}>
                    <Image style={styles.imgMenu} source={menuEmpresa} />
                </TouchableHighlight>
                <TouchableHighlight onPress={() => {Actions.servicos()}}>
                    <Image style={styles.imgMenu} source={menuServico} />
                </TouchableHighlight>
                </View>
                <View style={styles.menuRow}>
                <TouchableHighlight onPress={() => {Actions.clientes()}}>
                    <Image style={styles.imgMenu} source={menuCliente} />
                    </TouchableHighlight>
                    <TouchableHighlight onPress={() => {Actions.contato()}}>
                    <Image style={styles.imgMenu} source={menuContato} />
                    </TouchableHighlight>
                </View>
            </View>
        </View>
    );
  }
}
const styles = StyleSheet.create({
    logo: {
      marginTop: 30,
      alignItems: 'center'
    },
    menu: {
      alignItems: 'center'
    },
    menuRow: {
        flexDirection: 'row'
    },
    imgMenu: {
        margin: 15
    }
  });