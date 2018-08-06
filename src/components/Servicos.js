import React, {Component} from 'react';
import {Platform, StyleSheet, Image, View, Text} from 'react-native';
import Nav from './Nav';

const detalheCliente = require('../images/detalhe_servico.png');
const seo = require('../images/seo.png');
const protection = require('../images/protection.png');
const developer = require('../images/developer.png');

export default class Servicos extends Component {
  render() {
    return (
        <View style={styles.conteudo}>
            <Nav />
            <View style={styles.logo}>
            <Image source={detalheCliente} />
            <Text style={styles.logoText}>Servicos</Text>
        </View>
        <View style={styles.menu}>
            <View style={styles.menuRow}>
                <Image style={styles.imgMenu} source={seo} />
                <Text style={styles.textRow} >Seo Optimization</Text>
            </View>
            <View style={styles.menuRow}>
                <Image style={styles.imgMenu} source={protection} />
                <Text style={styles.textRow} >Data Protection</Text>
            </View>
            <View style={styles.menuRow}>
            <Image style={styles.imgMenu} source={developer} />
            <Text style={styles.textRow} >Web Developer</Text>
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