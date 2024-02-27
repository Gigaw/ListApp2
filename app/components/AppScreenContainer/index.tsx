import React, {PropsWithChildren} from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import GLOBAS_STYLES from '../../constants/globalStyles';

interface Props extends PropsWithChildren {
  disableHorizontalPadding?: boolean;
}

const AppScreenContainer = ({
  children,
  disableHorizontalPadding = false,
}: Props) => {
  return (
    <SafeAreaView style={styles.safeAreaView}>
      <View
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
