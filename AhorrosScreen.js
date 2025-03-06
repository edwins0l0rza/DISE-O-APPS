import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Alert } from 'react-native';

const AhorrosScreen = () => {
  const [ahorros, setAhorros] = useState(0);

  const incrementar = () => {
    setAhorros(ahorros + 10);
  };

  const resetear = () => {
    setAhorros(0);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pantalla de Ahorros de MESSI</Text>
      <Text style={styles.counter}>Ahorros: {ahorros}</Text>

      <View style={styles.buttonsContainer}>
        {/* Botón Sumar 10 */}
        <TouchableOpacity style={styles.button} onPress={incrementar}>
          <Text style={styles.buttonText}>Sumar 10</Text>
        </TouchableOpacity>

        {/* Botón Poner en 0 */}
        <TouchableOpacity style={styles.button} onPress={resetear}>
          <Text style={styles.buttonText}>Poner en 0</Text>
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
    backgroundColor: '#FFFFF0', 
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  counter: {
    fontSize: 20,
    marginBottom: 20,
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

export default AhorrosScreen;


