import React, { Component } from 'react';
import { View, Keyboard } from 'react-native';
import { MKTextField } from 'react-native-material-kit';
import PropTypes from 'prop-types';
import styles from './debtPopup.styles';
import * as colors from '../../../utils/colors';
import ButtonDeprecated from '../../../components/Button/ButtonDeprecated';
import Popup from '../../../components/Popup/Popup';

export default class DebtPopup extends Component {
  static propTypes = {
    onChangeVal: PropTypes.func.isRequired,
    onChangeDescr: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired,
    isGivePopup: PropTypes.bool.isRequired
  };

  state = {
    loading: false
  };

  onSubmit = async () => {
    this.setState({ loading: true });
    await this.props.onSubmit();
    this.setState({ loading: false });
  };

  render() {
    const { isGivePopup, onChangeVal, onChangeDescr, ...rest } = this.props;
    const backgr = isGivePopup ? styles.giveBackgr : styles.takeBackgr;
    const buttonText = isGivePopup ? 'Give' : 'Take';

    return (
      <Popup {...rest}>
        <View style={[styles.top, backgr]}>
          <MKTextField
            style={styles.input}
            textInputStyle={styles.debtText}
            highlightColor={'white'}
            tintColor={'white'}
            placeholderTextColor={'white'}
            keyboardType="numeric"
            placeholder="Debt value"
            onChangeText={onChangeVal}
            floatingLabelEnabled
            autoFocus
          />
        </View>

        <View style={styles.bottom}>
          <MKTextField
            autoCorrect={false}
            style={styles.input}
            placeholder="Description"
            onChangeText={onChangeDescr}
            floatingLabelEnabled
            highlightColor={colors.gray}
            returnKeyType="done"
            autoCapitalize={'sentences'}
            onSubmitEditing={Keyboard.dismiss}
          />

          <ButtonDeprecated
            onPress={this.onSubmit}
            title={buttonText}
            loading={this.state.loading}
            textStyle={styles.submitText}
            style={styles.submit}
          />
        </View>
      </Popup>
    );
  }
}
