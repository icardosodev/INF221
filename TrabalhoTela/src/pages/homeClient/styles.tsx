import Constants from 'expo-constants';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight + 20,
  },
  textSt: {
    fontSize: 18,
    marginBottom: 50,
    marginTop: 167,
    marginLeft: 125,
  },
  buttonsContainer: {
    width: '100%',
    alignItems: 'center',
    marginTop: 30,
  },
  buttonContainer: {
    marginBottom: 25,
  },
  button: {
    width: 226,
    height: 52,
    borderRadius: 20,
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontWeight: 'bold',
    fontSize: 24,
  },
});