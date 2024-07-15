import { StyleSheet } from 'react-native';

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
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 5,
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
    borderWidth: 0,
    borderColor: 'transparent', 
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

export default styles;
