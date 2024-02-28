import React from 'react';
import {Image, StyleSheet, View} from 'react-native';

import Spacer from '@app/components/Spacer';

import {Photo} from '@app/models/Photo';

interface Props {
  photo: Photo;
  index: number;
  photoSize: number;
}
const PhotoItem = ({photo, index, photoSize}: Props) => {
  return (
    <View style={styles.container}>
      {(index + 1) % 3 === 0 ? <Spacer height={10} width={10} /> : null}
      <Image
        source={{uri: photo.thumbnailUrl}}
        style={{width: photoSize, height: photoSize}}
      />
      {index % 3 === 0 ? <Spacer height={10} width={10} /> : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
});

export default PhotoItem;
