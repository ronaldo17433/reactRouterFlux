import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import {Router, Scene} from 'react-native-router-flux'

import Home from './src/components/Home';
import Clientes from './src/components/Clientes';
import Empresa from './src/components/Empresa';
import Contato from './src/components/Contato';
import Servicos from './src/components/Servicos';

export default class App extends Component {
  render() {
    return (
      <Router>
      <Scene key="root">
        <Scene key='home' component={Home} initial />
        <Scene key='clientes' component={Clientes} />
        <Scene key='empresa' component={Empresa} />
        <Scene key='contato' component={Contato} />
        <Scene key='servicos' component={Servicos} />
      </Scene>
      </Router>
    );
  }
}


