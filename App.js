import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NativeBaseProvider } from 'native-base';
import ImageGallery from './components/ImageGallery/ImageGallery';
import AppBar from './components/AppBar/AppBar.js';
import ThemeButton from './components/ThemeButton/ThemeButton.js';
import React from 'react';
import { NativeBaseProvider, StorageManager, ColorMode } from 'native-base';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Define the colorModeManager,
// here we are using react-native-async-storage (https://react-native-async-storage.github.io/async-storage/)
const colorModeManager: StorageManager = {
  get: async () => {
    try {
      let val = await AsyncStorage.getItem('@color-mode');
      return val === 'dark' ? 'dark' : 'light';
    } catch (e) {
      return 'light';
    }
  },
  set: async (value: ColorMode) => {
    try {
      await AsyncStorage.setItem('@color-mode', value);
    } catch (e) {
      console.log(e);
    }
  },
};




export default function App() {
  return (
    <NativeBaseProvider colorModeManager={colorModeManager}>
      <View style={styles.container}>
        <AppBar />
        <ImageGallery />
        <StatusBar style="auto" />
        <Text color="white" fontSize="20" fontWeight="bold">
          Camera App!
        </Text>
        <ThemeButton />
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