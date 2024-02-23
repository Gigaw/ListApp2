import React from 'react';
import {ActivityIndicator, Dimensions, StyleSheet, View} from 'react-native';

interface Props {
  isLoading: boolean;
}

const FullScreenLoader = ({isLoading}: Props) => {
  return (
    <>
      {isLoading ? (
        <View style={styles.container}>
          <ActivityIndicator
            size={'large'}
            style={styles.loader}
            color={'white'}
          />
        </View>
      ) : null}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get('window').width,
    justifyContent: 'center',
    alignItems: 'center',
    height: Dimensions.get('window').height,
    position: 'absolute',
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
  },
  loader: {
    paddingBottom: 200,
  },
});

export default FullScreenLoader;
