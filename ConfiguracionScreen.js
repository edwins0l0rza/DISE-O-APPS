import React from 'react';
import { View, Text, Alert, TouchableOpacity, StyleSheet } from 'react-native';

const ConfiguracionScreen = () => {
  const cambiarTema = () => {
    Alert.alert('Configuración', 'Tema cambiado');
  };

  const cambiarIdioma = () => {
    Alert.alert('Configuración', 'Idioma cambiado');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Configuración</Text>
      <Text style={styles.optionsText}>Opciones:</Text>
      
      <View style={styles.buttonsContainer}>
        {/* Botón Cambiar Tema */}
        <TouchableOpacity style={styles.button} onPress={cambiarTema}>
          <Text style={styles.buttonText}>Cambiar Tema</Text>
        </TouchableOpacity>

        {/* Botón Cambiar Idioma */}
        <TouchableOpacity style={styles.button} onPress={cambiarIdioma}>
          <Text style={styles.buttonText}>Cambiar Idioma</Text>
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
    backgroundColor: '#D3D3D3'
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  optionsText: {
    fontSize: 18,
    marginBottom: 20,
    fontWeight: 'bold',
  },
  buttonsContainer: {
    flexDirection: 'row',  
    justifyContent: 'center',  
    width: '100%',
    marginTop: 20,
  },
  button: {
    backgroundColor: '#191970',  
    paddingVertical: 10,  
    paddingHorizontal: 20,  
    borderRadius: 8,  
    margin: 10,  
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#B8860B',  
    fontSize: 16,  
    fontWeight: 'bold',
  },
});

export default ConfiguracionScreen;

