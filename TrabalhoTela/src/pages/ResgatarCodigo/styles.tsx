import Constants from 'expo-constants';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight + 10,
  },
  inputGroup: {
    marginTop: 40,
    marginLeft: 24,
  },
  inputGroupText: {
    fontSize: 20,
  },
  inputGroupInput: {
    width: 314,
    height: 47,
    borderRadius: 12,
    borderColor: '#00B7F1',
    borderWidth: 1,
  },
  inputGroupButtonContainer: {
    marginTop: 25,
    marginLeft: 225,
  },
  button: {
    width: 89,
    height: 28,
    borderRadius: 12,
    backgroundColor: '#00B7F1',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFF',
  },
  backButtonContainer: {
    marginTop: 391,
    marginLeft: 23,
  },
})