import { StyleSheet } from 'react-native';
import * as colors from '../../utils/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white
  },

  summaryContainer: {
    flex: 1.5,
    justifyContent: 'center'
  },

  summaryGiven: { backgroundColor: colors.green },

  summaryTaken: { backgroundColor: colors.red },

  acceptAllBtn: {
    position: 'absolute',
    right: 15,
    bottom: 15,
    backgroundColor: colors.white,
    borderRadius: 16,
    paddingHorizontal: 8,
    paddingVertical: 6
  },

  acceptAllWrapper: {
    flexDirection: 'row',
    alignItems: 'center'
  },

  name: {
    fontSize: 30,
    color: 'white',
    textAlign: 'center'
  },

  moneyAmount: {
    fontSize: 30,
    color: 'white',
    textAlign: 'center'
  },

  stateMessage: {
    padding: 12,
    borderBottomWidth: 0.5,
    borderColor: colors.lightGray
  },

  messageText: {
    color: colors.gray,
    textAlign: 'center'
  },

  listContainer: {
    flex: 2
  },

  creationButtons: {
    height: 50,
    flexDirection: 'row'
  },

  creationText: { fontSize: 20, color: 'white' },

  creationButton: { flex: 1, alignItems: 'center', justifyContent: 'center' },

  redBtn: { backgroundColor: colors.red },

  greenBtn: { backgroundColor: colors.green },

  spinner: { alignItems: 'center', paddingTop: 30 }
});
