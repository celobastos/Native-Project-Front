import React, { useState, useEffect, useRef } from 'react';
import { View, Text, TextInput, TouchableOpacity, ActivityIndicator, Animated } from 'react-native';
import styles from '../styles/LoginFormStyles';

interface LoginFormProps {
  email: string;
  setEmail: (email: string) => void;
  password: string;
  setPassword: (password: string) => void;
  onSubmit: () => void;
  error: string;
}

const LoginForm: React.FC<LoginFormProps> = ({ email, setEmail, password, setPassword, onSubmit, error }) => {
  const [loading, setLoading] = useState(false);
  const [errorVisible, setErrorVisible] = useState(false);
  const errorOpacity = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if (error) {
      setErrorVisible(true);
      Animated.timing(errorOpacity, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true,
      }).start();

      const timer = setTimeout(() => {
        Animated.timing(errorOpacity, {
          toValue: 0,
          duration: 500,
          useNativeDriver: true,
        }).start(() => setErrorVisible(false));
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [error]);

  const handleSubmit = async () => {
    setLoading(true);
    await onSubmit();
    setLoading(false);
  };

  return (
    <>
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
      <TouchableOpacity style={styles.loginButton} onPress={handleSubmit} activeOpacity={0.8} disabled={loading}>
        {loading ? (
          <ActivityIndicator size="small" color="#000" />
        ) : (
          <Text style={styles.buttonText}>Entrar</Text>
        )}
      </TouchableOpacity>
      {errorVisible && (
        <Animated.View style={[styles.errorContainer, { opacity: errorOpacity }]}>
          <Text style={styles.errorText}>{error}</Text>
        </Animated.View>
      )}
    </>
  );
};

export default LoginForm;
