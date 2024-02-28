import React, {PropsWithChildren} from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';

type Props = PropsWithChildren<{
  onPress?: () => void;
}>;

const AppListItem = ({onPress, children}: Props) => {
  return (
    <>
      {onPress ? (
        <TouchableOpacity style={styles.container} onPress={onPress}>
          {children}
        </TouchableOpacity>
      ) : (
        <View style={styles.container}>{children}</View>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: 'white',
    marginBottom: 10,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
    borderColor: 'lightgrey',
    borderWidth: 1,
  },
  text: {
    fontSize: 20,
    fontWeight: '700',
  },
});

export default AppListItem;
