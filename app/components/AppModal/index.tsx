import React, {PropsWithChildren} from 'react';
import {Alert, Modal, StyleSheet, View} from 'react-native';

import AppSmallButton from '../AppSmallButton';
import AppText from '../AppText';
import Spacer from '../Spacer';

interface Props extends PropsWithChildren {
  visible: boolean;
  title: string;
  onConfirm: () => void;
  onCancel: () => void;
  testID?: string;
}

const AppModal = ({
  visible,
  title,
  testID,
  onCancel,
  onConfirm,
  children,
}: Props) => {
  return (
    <Modal
      testID={testID}
      animationType="fade"
      transparent={true}
      visible={visible}
      onRequestClose={() => {
        Alert.alert('Modal has been closed.');
      }}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <AppText fontStyle="h3">{title}</AppText>
          <Spacer height={10} />
          {children}
          <Spacer height={10} />
          <View style={styles.footer}>
            <AppSmallButton
              text="Cancel"
              type="simple"
              onPress={() => onCancel()}
            />
            <AppSmallButton text="Okay" onPress={() => onConfirm()} />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    width: '80%',
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 15,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 10,
    padding: 10,
    width: '100%',
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: 'black',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default AppModal;
