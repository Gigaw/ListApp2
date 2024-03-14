import React from 'react';

import AppListItem from '@app/components/AppListItem';
import AppText from '@app/components/AppText';

import {Album} from '@app/models/Album';

interface Props {
  album: Album;
  onPress: () => void;
  onLongPress: () => void;
  testID?: string;
}

const AlbumsListItem = ({album, onPress, onLongPress, testID}: Props) => {
  return (
    <AppListItem
      testID={testID}
      onPress={onPress}
      onLongPress={() => onLongPress()}>
      <AppText fontStyle="h3">{album.title}</AppText>
    </AppListItem>
  );
};

export default AlbumsListItem;
