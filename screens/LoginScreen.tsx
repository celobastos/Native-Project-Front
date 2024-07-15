import React, { useState, useRef } from 'react';
import { View, Text, ScrollView, Animated, Alert } from 'react-native';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { RootStackParamList } from './types/types';
import LoginButtons from '../components/LoginButtons';
import LoginForm from '../components/LoginForm';
import BackButton from '../components/BackButton';
import styles from '../styles/LoginScreenStyles';

const LoginScreen: React.FC = () => {
  const [loginPressed, setLoginPressed] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

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
          navigation.navigate('Home');
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
        {loginPressed && <BackButton onPress={handleBackPress} />}
        <Text style={styles.title}>Amo minha namorada</Text>
        <View style={styles.buttonContainer}>
          {!loginPressed ? (
            <LoginButtons onLoginPress={handleLoginPress} />
          ) : (
            <Animated.View style={[styles.loginForm, { opacity: fadeAnim }]}>
              <LoginForm
                email={email}
                setEmail={setEmail}
                password={password}
                setPassword={setPassword}
                onSubmit={handleLoginSubmit}
                error={error}
              />
            </Animated.View>
          )}
        </View>
      </ScrollView>
    </View>
  );
};

export default LoginScreen;
