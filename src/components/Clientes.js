import React, {Component} from 'react';
import {Platform, StyleSheet, Image, View, Text} from 'react-native';
import Nav from './Nav';

const detalheCliente = require('../images/detalhe_cliente.png');
const cliente1 = require('../images/cliente1.png');
const cliente2 = require('../images/cliente2.png');

export default class Clientes extends Component {
  render() {
    return (
        <View style={styles.conteudo}>
            <Nav />
            <View style={styles.logo}>
            <Image source={detalheCliente} />
            <Text style={styles.logoText}>Nossos Clientes</Text>
        </View>
        <View style={styles.menu}>
            <View style={styles.menuRow}>
                <Image style={styles.imgMenu} source={cliente1} />
            </View>
            <View style={styles.menuRow}>
                <Image style={styles.imgMenu} source={cliente2} />
            </View>
            <View style={styles.menuRow}>
            <Image style={styles.imgMenu} source={cliente1} />
        </View>
        </View>
        </View>
    );
  }
}
const styles = StyleSheet.create({
    conteudo: {
        flex: 1,
        backgroundColor: '#D8EDDE'
    },
    logo: {

      marginTop: 30,
      alignItems: 'center',
      flexDirection: 'row',
      borderWidth: 0.5,
      borderColor: '#999',
      backgroundColor: '#FFF'
    },
    logoText: {
      fontSize: 26,
      fontWeight: 'bold',
    },
    menu: {
      alignItems: 'center',
      padding: 10
    },
    menuRow: {
        flexDirection: 'row',
        borderWidth: 0.5,
        borderColor: '#999',
        backgroundColor: '#fff',
        marginTop: 10,
       
    },
    imgMenu: {
        margin: 15
    }
  });