import React from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity } from 'react-native';

interface LoginFormProps {
  email: string;
  setEmail: (email: string) => void;
  password: string;
  setPassword: (password: string) => void;
  onSubmit: () => void;
  error: string;
}

const LoginForm: React.FC<LoginFormProps> = ({ email, setEmail, password, setPassword, onSubmit, error }) => {
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
      <TouchableOpacity style={styles.loginButton} onPress={onSubmit} activeOpacity={0.8}>
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>
      {error ? (
        <View style={styles.errorContainer}>
          <Text style={styles.errorText}>{error}</Text>
        </View>
      ) : null}
    </>
  );
};

const styles = StyleSheet.create({
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
  buttonText: {
    textAlign: 'center',
    color: '#000',
    fontWeight: 'bold',
  },
  errorContainer: {
    position: 'absolute',
    bottom: -50,
    width: '100%',
    alignItems: 'center',
  },
  errorText: {
    color: 'red',
    marginBottom: 20,
    marginTop: 20,
  },
});

export default LoginForm;
