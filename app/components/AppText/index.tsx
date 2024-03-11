import React from 'react';
import type {PropsWithChildren} from 'react';
import {StyleSheet, Text, TextProps, TextStyle} from 'react-native';

interface Props extends PropsWithChildren, TextProps {
  fontStyle?: keyof typeof styles;
  style?: TextStyle;
  textAlign?: TextStyle['textAlign'];
  type?: 'default' | 'error' | 'warning' | 'success';
}

const AppText = ({
  fontStyle = 'p1',
  textAlign,
  type = 'default',
  style,
  children,
  ...props
}: Props) => {
  return (
    <Text
      style={[
        styles[fontStyle],
        {textAlign: textAlign},
        type === 'error' && styles.error,
        style,
      ]}
      {...props}>
      {children}
    </Text>
  );
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
  p0: {
    fontSize: 20,
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
  error: {
    color: 'red',
  },
});

export default AppText;
