import React from 'react';
import { View, Text, TouchableOpacity, Alert } from 'react-native';
import styles from '../styles/LoginButtonStyles';

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

export default LoginButtons;
