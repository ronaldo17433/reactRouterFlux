import React, {Component} from 'react';
import {Platform, StyleSheet, Image, View, Text} from 'react-native';
import Nav from './Nav';

const detalheCliente = require('../images/detalhe_contato.png');
const suport = require('../images/24-7-icon.png');
const email = require('../images/Email-icon.png');


export default class Contato extends Component {
  render() {
    return (
        <View style={styles.conteudo}>
            <Nav />
            <View style={styles.logo}>
            <Image source={detalheCliente} />
            <Text style={styles.logoText}>Fale Conosco</Text>
        </View>
        <View style={styles.menu}>
            <View style={styles.menuRow}>
                <Image style={styles.imgMenu} source={suport} />
                <Text style={styles.textRow} >(21) 123-4567</Text>
            </View>
            <View style={styles.menuRow}>
                <Image style={styles.imgMenu} source={email} />
                <Text style={styles.textRow} >suporte@atm.com</Text>
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
        backgroundColor: '#fff',
        width: 300,
        alignItems: 'center',
       
    },
    textRow: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#A0AFAF',
        marginLeft: 20
    },
    imgMenu: {
        margin: 15
    }
  });