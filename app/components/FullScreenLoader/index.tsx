import React from 'react';
// import {Modal} from 'react-native';
import {
  ActivityIndicator,
  Dimensions,
  Modal,
  StyleSheet,
  View,
} from 'react-native';

interface Props {
  isLoading: boolean;
}

const FullScreenLoader = ({isLoading}: Props) => {
  return (
    <Modal animationType="fade" transparent={true} visible={isLoading}>
      <View style={styles.container}>
        <ActivityIndicator
          size={'large'}
          style={styles.loader}
          color={'white'}
        />
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get('window').width,
    justifyContent: 'center',
    alignItems: 'center',
    height: Dimensions.get('window').height,
    position: 'absolute',
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
  },
  loader: {
    // paddingBottom: 200,
  },
});

export default FullScreenLoader;
