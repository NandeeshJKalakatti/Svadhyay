import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
// import Homepage from './src/homepage';
// import Branch from './src/Branch';
// import Year from './src/Year'
// import Scheme from './src/Scheme';
import Rootnavigation from './src/Rootnavigation';
export default function App() {
  return (
    //  <Homepage/>
    //  <Branch/>
    // <Year/>
    // <Branc/>
    <Rootnavigation/>
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
