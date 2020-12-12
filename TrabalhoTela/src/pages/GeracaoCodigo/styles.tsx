import Constants from 'expo-constants';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight + 10,
  },
  formContainer: {
    marginTop: 40,
    marginLeft: 24,
  },
  formText: {
    fontSize: 20,
  },
  formInput: {
    borderColor: '#00B7F1',
    borderWidth: 1,
    borderRadius: 12,
    width: 314,
    height: 47,
  },
  formGroup: {
    marginBottom: 20,
  },
  formButtonContainer: {
    width: '100%',
    marginLeft: 225,
  },
  formButton: {
    backgroundColor: '#00B7F1',
    width: 89,
    height: 28,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  formButtonText: {
    fontSize: 18,
    color: '#FFF',
    fontWeight: 'bold',
  },
  codigoGroup: {
    marginTop: 40,
    marginLeft: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  codigoGroupText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 102,
  },
  codigoContainer: {
    width: 314,
    height: 47,
    borderRadius: 12,
    borderColor: '#00B7F1',
    borderWidth: 1,
    marginRight: 20,
  },
  codigoView: {
    backgroundColor: '#456B7720',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    borderRadius: 12,
  },
  codigoText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#555',
  },
  codigoButtonsGroup: {
    marginTop: 10,
    flexDirection: 'row',
    width: '100%',
    marginLeft: 220,
  },
  codigoButtonContainer: {
    marginLeft: 14,
  },
  codigoButton: {
    backgroundColor: '#00B7F1',
    width: 89,
    height: 28,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  codigoButtonText: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 18,
  },
  backButtonContainer: {
    marginTop: 150,
  }
});