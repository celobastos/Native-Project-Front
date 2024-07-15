// src/screens/LoginScreen.tsx
import React, { useState, useRef } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, ScrollView, Animated, TextInput, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { RootStackParamList } from './types/types';

const LoginScreen: React.FC = () => {
  const [loginPressed, setLoginPressed] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const navigation = useNavigation<NavigationProp<RootStackParamList>>(); // Use the types

  const handleLoginPress = () => {
    setLoginPressed(true);
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true,
    }).start();
  };

  const handleBackPress = () => {
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 500,
      useNativeDriver: true,
    }).start(() => {
      setLoginPressed(false);
      setError('');
    });
  };

  const handleLoginSubmit = async () => {
    try {
      const response = await fetch('http://localhost:3000/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();
      console.log('Response status:', response.status);
      console.log('Response data:', data);

      if (response.status === 201 && data.statusCode === 404) {
        console.log('Setting error state to "Credenciais Incorretas"');
        setError('Credenciais Incorretas');
      } else if (response.ok) {
        if (data.token) {
          Alert.alert('Login successful', `Token: ${data.token}`);
          navigation.navigate('Home');  // Navigate to the Home screen on successful login
        } else {
          Alert.alert('Login failed', data.message || 'Unknown error occurred');
        }
      } else {
        setError(data.message || 'Unknown error occurred');
      }
    } catch (error) {
      const errorMessage = (error as Error).message;
      console.error('Error during fetch:', errorMessage);
      setError(errorMessage);
      Alert.alert('Login failed', errorMessage);
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.background}>
        {loginPressed && (
          <TouchableOpacity style={styles.backButton} onPress={handleBackPress}>
            <Ionicons name="arrow-back" size={24} color="black" />
          </TouchableOpacity>
        )}
        <Text style={styles.title}>Amo minha namorada</Text>
        <View style={styles.buttonContainer}>
          {!loginPressed ? (
            <>
              <TouchableOpacity
                style={styles.loginButton}
                onPress={handleLoginPress}
                activeOpacity={4}
              >
                <Text style={styles.buttonText}>Login</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.registerButton}
                onPress={() => Alert.alert('Register', 'Functionality not implemented')}
                activeOpacity={0.8}
              >
                <Text style={styles.buttonText}>Cadastre-se</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => Alert.alert('Privacy Policy', 'Functionality not implemented')} style={styles.privacyButton}>
                <Text style={styles.privacyText}>Política de Privacidade</Text>
              </TouchableOpacity>
            </>
          ) : (
            <Animated.View style={[styles.loginForm, { opacity: fadeAnim }]}>
              <TextInput
                style={styles.input}
                placeholder="Usuário"
                value={email}
                onChangeText={setEmail}
                autoCapitalize="none"
                keyboardType="email-address"
              />
              <TextInput
                style={styles.input}
                placeholder="Senha"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
              />
              <TouchableOpacity
                style={styles.loginButton}
                onPress={handleLoginSubmit}
                activeOpacity={0.8}
              >
                <Text style={styles.buttonText}>Entrar</Text>
              </TouchableOpacity>
              {error ? (
                <View style={styles.errorContainer}>
                  <Text style={styles.errorText}>{error}</Text>
                </View>
              ) : null}
            </Animated.View>
          )}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#bfbcf3',
  },
  background: {
    flexGrow: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '100%'
  },
  backButton: {
    position: 'absolute',
    top: 40,
    left: 20,
    zIndex: 1,
  },
  title: {
    marginTop: 60,
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
  },
  buttonContainer: {
    width: '80%',
    alignItems: 'center',
    marginBottom: 60,
    flex: 1,
    justifyContent: 'flex-end',
  },
  loginButton: {
    backgroundColor: '#f1feac',
    padding: 10,
    borderRadius: 24,
    marginBottom: 10,
    width: 350,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 5,
  },
  registerButton: {
    backgroundColor: 'transparent',
    padding: 10,
    borderRadius: 24,
    borderWidth: 1,
    borderColor: '#000',
    marginBottom: 30,
    width: 350,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 5,
  },
  buttonText: {
    textAlign: 'center',
    color: '#000',
    fontWeight: 'bold'
  },
  privacyText: {
    textAlign: 'center',
    color: '#000',
    fontWeight: 'bold',
    textDecorationLine: 'underline'
  },
  privacyButton: {
    marginBottom: 10
  },
  loginForm: {
    width: '80%',
    borderWidth:0,
    alignItems: 'center',
  },
  input: {
    height: 40,
    borderRadius: 24,
    marginBottom: 20,
    paddingHorizontal: 10,
    width: 350,
    backgroundColor: '#fff',
    borderWidth: 0,
    borderColor: 'transparent',
  },
  errorContainer: {
    position: 'absolute',
    bottom: -50,
    width: '100%',
    alignItems: 'center',
  },
  errorText: {
    color: 'red',  // Styling for the error message
    marginBottom: 20,
    marginTop:20
  },
});

export default LoginScreen;
