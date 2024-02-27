import React from 'react';
import {View} from 'react-native';
import Spacer from '../../components/Spacer';
import AppText from '../../components/AppText';

const AlbumDetailHeader = ({title}) => {
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
