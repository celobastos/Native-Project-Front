import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Alert } from 'react-native';

interface LoginButtonsProps {
  onLoginPress: () => void;
}

const LoginButtons: React.FC<LoginButtonsProps> = ({ onLoginPress }) => {
  return (
    <>
      <TouchableOpacity style={styles.loginButton} onPress={onLoginPress} activeOpacity={4}>
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
  );
};

const styles = StyleSheet.create({
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
    fontWeight: 'bold',
  },
  privacyText: {
    textAlign: 'center',
    color: '#000',
    fontWeight: 'bold',
    textDecorationLine: 'underline',
  },
  privacyButton: {
    marginBottom: 10,
  },
});

export default LoginButtons;
