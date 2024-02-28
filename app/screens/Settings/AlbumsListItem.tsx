import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';

import AppText from '@app/components/AppText';

import {Album} from '@app/models/Album';

interface Props {
  album: Album;
  onPress: () => void;
}

const AlbumsListItem = ({album, onPress}: Props) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <AppText fontStyle="h3">
        {album.id}/ {album.title}
      </AppText>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: 'white',
  },
});

export default AlbumsListItem;
