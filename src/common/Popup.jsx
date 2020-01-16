import React from 'react';
import { FontAwesome5 } from '@expo/vector-icons';
import {
  Text,
  View,
  Modal,
  TouchableHighlight,
  KeyboardAvoidingView,
} from 'react-native';
import { BlurView } from 'expo-blur';
import PropTypes from 'prop-types';
import styles from './styles';
import Row from './Row';
import Column from './Column';

const PopupHeader = ({ title, onCancel }) => (
  <View style={styles.popupHeader}>
    <Text style={styles.popupTitle}>{title}</Text>
    <TouchableHighlight style={styles.popupCloseButtonWrapper} underlayColor="rgba(0,0,0,0.1)" onPress={onCancel}>
      <FontAwesome5 name="times" size={16} color="black" />
    </TouchableHighlight>
  </View>
);

const PopupButtonGroup = ({
  onConfirm, onCancel, confirmButtonText, confirmDisabled,
}) => (
  <Row>
    <Column flex={1}>
      <TouchableHighlight
        style={styles.popupButton}
        onPress={onCancel}
        underlayColor="#eee"
      >
        <Text style={{ color: '#333' }}>Cancel</Text>
      </TouchableHighlight>
    </Column>
    <Column flex={1}>
      <TouchableHighlight
        style={[
          styles.popupButton,
          styles.popupButtonPrimary,
          confirmDisabled && { opacity: 0.5 },
        ]}
        disabled={confirmDisabled}
        onPress={onConfirm}
        underlayColor="#999"
      >
        <Text style={{ fontSize: 14, color: '#fff' }}>{confirmButtonText}</Text>
      </TouchableHighlight>
    </Column>
  </Row>
);

export default function Popup({
  visible, onCancel, onConfirm, confirmButtonText, children, confirmDisabled, title,
}) {
  return (
    <Modal
      animationType="fade"
      transparent
      visible={visible}
      presentationStyle="overFullScreen"
      onRequestClose={onCancel}
    >
      <BlurView tint="dark" intensity={90} style={styles.popupBackground}>
        <KeyboardAvoidingView behavior="padding">
          <View style={styles.popupContainer}>
            <PopupHeader title={title} onCancel={onCancel} />
            <View style={styles.popupBody}>
              {children}
              <PopupButtonGroup
                confirmButtonText={confirmButtonText}
                confirmDisabled={confirmDisabled}
                onConfirm={onConfirm}
                onCancel={onCancel}
              />
            </View>
          </View>
        </KeyboardAvoidingView>
      </BlurView>
    </Modal>
  );
}
Popup.propTypes = {
  visible: PropTypes.bool.isRequired,
  onCancel: PropTypes.func.isRequired,
  onConfirm: PropTypes.func.isRequired,
  confirmButtonText: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]).isRequired,
  confirmDisabled: PropTypes.bool,
  title: PropTypes.string,
};

Popup.defaultProps = {
  confirmDisabled: false,
  title: '',
};

PopupHeader.propTypes = {
  title: PropTypes.string.isRequired,
  onCancel: PropTypes.func.isRequired,
};

PopupButtonGroup.propTypes = {
  onCancel: PropTypes.func.isRequired,
  onConfirm: PropTypes.func.isRequired,
  confirmDisabled: PropTypes.bool.isRequired,
  confirmButtonText: PropTypes.string.isRequired,
};
