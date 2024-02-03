import React from 'react';
import { Text, SafeAreaView, Button, Image } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
import { Card } from 'react-native-paper';

import homeStyles from '../components/home-styles';

const LogoImage = require('../assets/logo.png');

import { View, StyleSheet } from 'react-native'; // Importa View y StyleSheet

const HomeScreen = () => {
  return (
    <SafeAreaView style={homeStyles.container}>

      <Image source={LogoImage} style={homeStyles.logo} />

      {/* Navbar centrado */}
      <View style={styles.navbarContainer}>
        <Button title="Medicinales" style={styles.navbarButton}/>
        <Button title="Inicio" style={styles.navbarButton} />
        <Button title="Decoración" style={styles.navbarButton}/>
      </View>

      {/* Títulos */}
      <Text style={homeStyles.title1}></Text>

      <Card style={homeStyles.halfScreenCard}>
      </Card>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  navbarContainer: {
    flexDirection: 'row',
    justifyContent: 'center', // Centra los elementos horizontalmente
    alignItems: 'center', // Centra los elementos verticalmente
    marginBottom: 16, // Margen inferior para separar del resto del contenido
  },
});

export default HomeScreen;