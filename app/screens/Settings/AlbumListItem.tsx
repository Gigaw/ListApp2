import React from 'react';
import AppText from '../../components/AppText';
import {Pressable, StyleSheet} from 'react-native';

const AlbumListItem = ({album, onPress}) => {
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
