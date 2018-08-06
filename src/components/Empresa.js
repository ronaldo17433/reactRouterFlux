import React, {Component} from 'react';
import {Platform, StyleSheet, Image, View, Text} from 'react-native';
import Nav from './Nav';

const detalheCliente = require('../images/detalhe_empresa.png');
const empresa = require('../images/empresa.png');


export default class Empresa extends Component {
  render() {
    return (
        <View style={styles.conteudo}>
            <Nav />
            <View style={styles.logo}>
            <Image source={detalheCliente} />
            <Text style={styles.logoText}>Nossa Empresa</Text>
        </View>
        <View style={styles.menu}>
            <View style={styles.menuRow}>
                <Image style={styles.imgMenu} source={empresa} />
            </View>
            <View style={styles.description}>
                <Text style={styles.titulo}>LOREM IPSUM</Text>
                <Text style={styles.textDescrition}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</Text>
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
        margin: 10,
       
    },
    imgMenu: {
        margin: 15
    },
    description: {
        alignItems: 'center',
        margin: 10

    },
    textDescrition: {
        fontSize: 18,
        textAlign: 'center'
       
    },
    titulo:{
        fontSize: 18,
        fontWeight: 'bold'
    }
  });