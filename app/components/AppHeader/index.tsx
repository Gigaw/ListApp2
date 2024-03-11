import React from 'react';
import {View} from 'react-native';

import AppText from '../AppText';
import Spacer from '../Spacer';

interface Props {
  title: string;
  description: string;
}

const AppHeader = ({title, description}: Props) => {
  return (
    <View>
      <AppText fontStyle="h1">{title}</AppText>
      <Spacer height={10} />
      <AppText fontStyle="p1">{description}</AppText>
      <Spacer height={20} />
    </View>
  );
};

export default AppHeader;
