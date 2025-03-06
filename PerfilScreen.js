
import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const PerfilScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Perfil de Usuario</Text>
      <Text style={styles.Text}>Nombre: Lionel Messi</Text>
      <Text style={styles.Text}>Email: l10Goat.@gmail.com</Text>
      
     
      <Image
        source={{ uri: 'https://fcb-abj-pre.s3.amazonaws.com/img/jugadors/MESSI.jpg' }} // URL válida
        style={styles.image}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#191970'
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    color:'#B8860B',
  },
  image: {
    width: 100, 
    height: 100, 
    borderRadius: 50, 
    marginTop: 20,
  },
  Text: {
    color: '#B8860B',
  }
});

export default PerfilScreen;

