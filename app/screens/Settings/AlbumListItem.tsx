import React from 'react';
import {Pressable, StyleSheet} from 'react-native';

import AppText from '@app/components/AppText';

import {Album} from '@app/models/Album';

interface Props {
  album: Album;
  onPress: () => void;
}

const AlbumListItem = ({album, onPress}: Props) => {
  return (
    <Pressable onPress={onPress} style={styles.container}>
      <AppText fontStyle="h3">
        {album.id}/ {album.title}
      </AppText>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: 'white',
  },
});

export default AlbumListItem;
