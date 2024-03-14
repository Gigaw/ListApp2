import React from 'react';
import {Dimensions, Image, Modal, StyleSheet, View} from 'react-native';

import {useSafeAreaInsets} from 'react-native-safe-area-context';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

interface Props {
  visible: boolean;
  onClose: () => void;
  imageUrl: string;
}
const ImageModal = ({imageUrl, visible, onClose}: Props) => {
  const insets = useSafeAreaInsets();
  const topPadding = insets.top;
  return (
    <Modal animationType="fade" transparent={true} visible={visible}>
      <View style={styles.container}>
        <Image
          source={{uri: imageUrl}}
          style={styles.image}
          resizeMode="contain"
        />
        <FontAwesome
          testID="close-button"
          name="close"
          size={30}
          onPress={onClose}
          color="white"
          style={[styles.closeButton, {top: topPadding + 10}]}
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
    backgroundColor: 'rgba(0, 0, 0, 0.9)',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  closeButton: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
});

export default ImageModal;
