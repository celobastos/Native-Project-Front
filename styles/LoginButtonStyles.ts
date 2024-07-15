import { StyleSheet } from 'react-native';

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

export default styles;
