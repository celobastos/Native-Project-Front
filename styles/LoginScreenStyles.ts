import { StyleSheet } from 'react-native';

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
    width: '100%',
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
  loginForm: {
    width: '80%',
    borderWidth: 0,
    alignItems: 'center',
  },
});

export default styles;
