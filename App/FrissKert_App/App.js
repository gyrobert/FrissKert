import { StatusBar } from 'expo-status-bar';
import {ImageBackground, StyleSheet, Text, View } from 'react-native';


export default function App() {
  return (
    <View style={styles.container}>
    
   
    <ImageBackground source={require('../../App/FrissKert_App/assets/hatter.png')} resizeMode="cover" style={styles.image}>
  
      <Text style={styles.text}>

      Frisgjskert</Text>
      
    </ImageBackground>
  </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header:{

    padding: 50,
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },
  text: {
    color: 'white',
    fontSize: 80,
    lineHeight: 84,
    fontWeight: 'bold',
    textAlign: 'center',
    
    
  },
});

