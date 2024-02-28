import React from 'react';
import type {PropsWithChildren} from 'react';
import {StyleSheet, Text} from 'react-native';

interface Props extends PropsWithChildren {
  fontStyle: keyof typeof styles;
}

const AppText = ({fontStyle, children}: Props) => {
  return <Text style={styles[fontStyle]}>{children}</Text>;
};

const styles = StyleSheet.create({
  h1: {
    fontSize: 32,
    fontWeight: 'bold',
  },
  h2: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  h3: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  h4: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  h5: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  p1: {
    fontSize: 16,
  },
  p2: {
    fontSize: 14,
  },
  p3: {
    fontSize: 12,
  },
});

export default AppText;
