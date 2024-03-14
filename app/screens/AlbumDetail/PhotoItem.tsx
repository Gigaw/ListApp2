import React from 'react';
import {Image, StyleSheet, TouchableOpacity} from 'react-native';

import Spacer from '@app/components/Spacer';

import {Photo} from '@app/models/Photo';

interface Props {
  photo: Photo;
  index: number;
  photoSize: number;
  onPress: () => void;
  testID?: string;
}
const PhotoItem = ({photo, index, photoSize, onPress, testID}: Props) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={onPress}
      testID={testID}>
      {(index + 1) % 3 === 0 ? <Spacer height={10} width={10} /> : null}
      <Image
        source={{uri: photo.thumbnailUrl}}
        style={{width: photoSize, height: photoSize}}
      />
      {index % 3 === 0 ? <Spacer height={10} width={10} /> : null}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
});

export default PhotoItem;
