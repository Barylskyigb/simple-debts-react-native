import { StyleSheet } from 'react-native';
import * as colors from '../../colors';

export default StyleSheet.create({
  item: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    alignItems: 'flex-end'
  },

  scroll: {
    borderColor: 'transparent'
  },

  bgContainer: {
    flex: 0,
    maxHeight: 144,
    top: 10,
    position: 'absolute',
    backgroundColor: colors.white
  }
});