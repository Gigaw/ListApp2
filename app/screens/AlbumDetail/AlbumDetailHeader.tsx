import React from 'react';
import {View} from 'react-native';

import AppText from '@app/components/AppText';
import Spacer from '@app/components/Spacer';

interface Props {
  title: string;
}

const AlbumDetailHeader = ({title}: Props) => {
  return (
    <View>
      <AppText fontStyle="h1">Photos</AppText>
      <Spacer height={10} />
      <AppText fontStyle="h2">{title}</AppText>
      <Spacer height={10} />
    </View>
  );
};

export default AlbumDetailHeader;
