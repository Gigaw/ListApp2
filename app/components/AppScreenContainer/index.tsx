import React, {PropsWithChildren} from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';

import GLOBAS_STYLES from '@app/constants/globalStyles';

interface Props extends PropsWithChildren {
  disableHorizontalPadding?: boolean;
}

const AppScreenContainer = ({
  children,
  disableHorizontalPadding = false,
}: Props) => {
  return (
    <SafeAreaView style={styles.safeAreaView} testID="app-screen-container">
      <View
        testID="app-screen-container-view"
        style={[
          styles.container,
          !disableHorizontalPadding && styles.horizontalPadding,
        ]}>
        {children}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
  },
  container: {
    flex: 1,
    paddingTop: 10,
  },
  horizontalPadding: {
    paddingHorizontal: GLOBAS_STYLES.PADDING_HORIZONTAL,
  },
});

export default AppScreenContainer;
