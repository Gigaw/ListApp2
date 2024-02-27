import {View, StyleSheet, Image} from 'react-native';
import React from 'react';
import Spacer from '../../components/Spacer';

const PhotoItem = ({photo, index, photoSize}) => {
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
