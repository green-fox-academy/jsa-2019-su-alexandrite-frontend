import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import {
  Text,
  View,
  Modal,
  SafeAreaView,
  TouchableHighlight,
} from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';

const PopupHeader = ({ title, onCancel }) => (
  <View style={styles.modalHeader}>
    <Text style={styles.modalTitle}>{title}</Text>
    <TouchableHighlight style={styles.modalCloseButtonWrapper} underlayColor="rgba(0,0,0,0.1)" onPress={onCancel}>
      <Ionicons name="md-close" size={13} color="white" />
    </TouchableHighlight>
  </View>
);

const PopupButtonGroup = ({
  onConfirm, onCancel, confirmButtonText, confirmDisabled,
}) => (
  <View style={styles.modalButtonGroup}>
    <TouchableHighlight
      style={[
        styles.modalButton,
        { backgroundColor: '#5eceb1' },
        confirmDisabled && { opacity: 0.5 },
      ]}
      disabled={confirmDisabled}
      onPress={onConfirm}
      underlayColor="#5eceb1a0"
    >
      <Text style={{ fontSize: 14, color: '#fff' }}>{confirmButtonText}</Text>
    </TouchableHighlight>
    <TouchableHighlight
      style={styles.modalButton}
      onPress={onCancel}
      underlayColor="#eee"
    >
      <Text style={{ color: '#666' }}>Cancel</Text>
    </TouchableHighlight>
  </View>
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
      <SafeAreaView style={styles.modalBackground}>
        <View style={styles.modalContainer}>
          <PopupHeader title={title} onCancel={onCancel} />
          <View style={styles.modalBody}>
            {children}
            <PopupButtonGroup
              confirmButtonText={confirmButtonText}
              confirmDisabled={confirmDisabled}
              onConfirm={onConfirm}
              onCancel={onCancel}
            />
          </View>
        </View>
      </SafeAreaView>
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
