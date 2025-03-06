import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bienvenid@
        a mi App
      </Text>
      
      <Text style={styles.optionsText}>Opciones:</Text>
      
      <View style={styles.buttonsContainer}>
        {/* Botón Ir a Ahorros */}
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Ahorros')}>
          <Text style={styles.buttonText}>Ir a Ahorros</Text>
        </TouchableOpacity>

        {/* Botón Ir a Perfil */}
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Perfil')}>
          <Text style={styles.buttonText}>Ir a Perfil</Text>
        </TouchableOpacity>

        {/* Botón Ir a Configuración */}
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Configuracion')}>
          <Text style={styles.buttonText}>Ir a Configuración</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',  
    alignItems: 'center',  
    padding: 20, 
    backgroundColor: '#8B0000', 
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 80,  
    color: '#B8860B',
  },
  optionsText: {
    fontSize: 18,
    marginBottom: 15,  
    fontWeight: 'bold',
    color: '#B8860B',
  },
  buttonsContainer: {
    flexDirection: 'column',  
    justifyContent: 'center',  
    width: '100%', 
    marginTop: 20,  
  },
  button: {
    backgroundColor: '#191970', 
    paddingVertical: 10,  
    paddingHorizontal: 20,  
    borderRadius: 5, 
    marginBottom: 15,  
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#B8860B', 
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default HomeScreen;



