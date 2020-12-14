import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    minHeight: 45,
  },
  topBarContainer: {
    justifyContent: 'center',
    left: 0,
    zIndex: 5,
    backgroundColor: '#00B7F1',
    width: '100%',
    height: 45,
  },
  buttonContainer: {
    marginLeft: 10,
    // position: 'absolute',
  },
  menuContainer: {
    zIndex: 5,
    height: '100%',
    flexDirection: 'row',
  },
  closeButton: {
    alignSelf: 'center',
    left: 280,
  },
})