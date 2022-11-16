import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NativeBaseProvider } from 'native-base';
import ImageGallery from './components/ImageGallery/ImageGallery';
import AppBar from './components/AppBar/AppBar.js';

export default function App() {
  return (
    <NativeBaseProvider>
      <View style={styles.container}>
        <AppBar />
        <ImageGallery />
        <StatusBar style="auto" />
        <Text color="white" fontSize="20" fontWeight="bold">
          Camera App!
        </Text>
      </View>
      
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});