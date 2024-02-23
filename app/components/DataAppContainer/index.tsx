import React from 'react';
import {ActivityIndicator, StyleSheet, View} from 'react-native';

interface Props {
  isLoading: boolean;
  children: JSX.Element | JSX.Element[];
}

const DataAppContainer = ({isLoading, children}: Props) => {
  return (
    <>
      {isLoading ? (
        <View style={styles.container}>
          <ActivityIndicator size={'large'} style={styles.loader} />
        </View>
      ) : (
        children
      )}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loader: {
    paddingBottom: 200,
  },
});

export default DataAppContainer;
