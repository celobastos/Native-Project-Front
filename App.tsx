import 'react-native-gesture-handler';
import React, { useState, useEffect, createContext, useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AppLoading from 'expo-app-loading';
import * as Font from 'expo-font';
import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';

const Stack = createStackNavigator();

const loadFonts = () => {
  return Font.loadAsync({
    'CustomFont': require('./assets/fonts/fonte.ttf'),
  });
};


const FontContext = createContext<string>('CustomFont');

const App: React.FC = () => {
  const [fontLoaded, setFontLoaded] = useState(false);

  useEffect(() => {
    async function load() {
      await loadFonts();
      setFontLoaded(true);
    }
    load();
  }, []);

  if (!fontLoaded) {
    return <AppLoading />;
  }

  return (
    <FontContext.Provider value="CustomFont">
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
          <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
        </Stack.Navigator>
      </NavigationContainer>
    </FontContext.Provider>
  );
};

export default App;

export const useCustomFont = () => useContext(FontContext);
