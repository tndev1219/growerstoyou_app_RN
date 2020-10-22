import { StyleSheet, Platform } from 'react-native';

export const isiOS = Platform.OS === 'ios';

export default StyleSheet.create({
  // Common
  waitingBackground: {
    flex: 1,
    backgroundColor: '#000000A0',
    alignItems: 'center',
    justifyContent: 'center'
  },
  waitingLayout: {
    borderRadius: 10,
    backgroundColor: 'white',
    padding: 25,
    flexDirection: 'row'
  }
})

