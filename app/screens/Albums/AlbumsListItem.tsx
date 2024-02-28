import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';

import AppListItem from '@app/components/AppListItem';
import AppText from '@app/components/AppText';

import {Album} from '@app/models/Album';

interface Props {
  album: Album;
  onPress: () => void;
}

const AlbumsListItem = ({album, onPress}: Props) => {
  return (
    <AppListItem onPress={onPress}>
      <AppText fontStyle="h3">{album.title}</AppText>
    </AppListItem>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: 'white',
  },
});

export default AlbumsListItem;
