import React from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';

interface Props {
  children: JSX.Element | JSX.Element[];
}

const AppScreenContainer = ({children}: Props) => {
  return (
    <SafeAreaView style={styles.safeAreaView}>
      <View style={styles.container}>{children}</View>
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
    paddingHorizontal: 20,
  },
});

export default AppScreenContainer;
