import React from 'react';
import {StyleSheet, View} from 'react-native';

import AppText from '@app/components/AppText';
import Spacer from '@app/components/Spacer';

import GLOBAS_STYLES from '@app/constants/globalStyles';

interface Props {
  title: string;
}

const AlbumDetailHeader = ({title}: Props) => {
  return (
    <View style={styles.container}>
      <Spacer height={10} />
      <AppText fontStyle="h2">{title}</AppText>
      <Spacer height={10} />
      <AppText fontStyle="p1">
        Сlick on the image to see it in more detail
      </AppText>
      <Spacer height={20} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: GLOBAS_STYLES.PADDING_HORIZONTAL,
  },
});

export default AlbumDetailHeader;
