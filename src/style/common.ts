/**
 * @packageDocumentation
 * Common styles used throughout the app.
 */
import {StyleSheet} from 'react-native';

const commonStyles = StyleSheet.create({
  modalButtonContainer: {
    alignItems: 'center',
    bottom: 60,
    width: '100%',
    height: 60,
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'row',
    position: 'absolute',
  },
  modalButtonDimensions: {
    height: 60,
    width: 60,
  },
  outline: {
    borderColor: 'red',
    borderWidth: 2,
  },
  shadow: {
    shadowColor: '000000',
    shadowOffset: {
      height: 0,
      width: 0,
    },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
});

export default commonStyles;
