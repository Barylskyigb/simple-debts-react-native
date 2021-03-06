import { StyleSheet } from 'react-native';
import * as colors from '../../utils/colors';

export default StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'center'
  },

  container: {
    flex: 1
  },

  top: {
    flex: 1,
    backgroundColor: colors.red,
    justifyContent: 'center'
  },

  topLine: {
    backgroundColor: colors.greenSecondary,
    height: 10
  },

  title: {
    fontSize: 60,
    color: colors.white,
    textAlign: 'center'
  },

  middle: {
    height: 15,
    backgroundColor: colors.redSecondary
  },

  bottom: {
    flex: 1.2,
    justifyContent: 'space-between',
    padding: 30
  },

  inputRow: {
    flexDirection: 'row',
    alignItems: 'center'
  },

  icon: {
    marginRight: 16
  },

  input: {
    flex: 1,
    fontSize: 16,
    marginBottom: -3
  },

  buttonsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 16
  },

  policyRow: {
    flexDirection: 'row',
    justifyContent: 'center'
  },

  policyText: {
    fontSize: 10
  },

  policyBtnText: {
    fontSize: 10,
    color: colors.red
  },

  btn: {
    minWidth: 120,
    padding: 16,
    borderRadius: 10,
    backgroundColor: colors.lightGray,
    height: 50
  },

  fbBtn: {
    backgroundColor: colors.fb,
    flexDirection: 'row',
    borderRadius: 10,
    paddingHorizontal: 14,
    height: 50
  },

  fbText: {
    color: colors.white,
    fontSize: 16,
    marginLeft: 10,
    fontWeight: '600'
  }
});
