import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Clase from './Components/Clase';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Ejercicio en clase</Text>
      <StatusBar style="auto" />
      <Clase></Clase>
    </View>
    

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
