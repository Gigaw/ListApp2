import React, {PropsWithChildren} from 'react';
import {
  StyleProp,
  StyleSheet,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';

type Props = PropsWithChildren<{
  onPress?: () => void;
  onLongPress?: () => void;
  paddingDisabled?: boolean;
  style?: StyleProp<ViewStyle>;
  testID?: string;
}>;

const AppListItem = ({
  onPress,
  children,
  onLongPress,
  style,
  paddingDisabled,
  ...props
}: Props) => {
  const currentStyle = [styles.container, style];

  if (paddingDisabled) {
    currentStyle.push(styles.paddingDisabled);
  }

  return (
    <>
      {onPress || onLongPress ? (
        <TouchableOpacity
          style={currentStyle}
          onLongPress={onLongPress}
          onPress={onPress}
          {...props}>
          {children}
        </TouchableOpacity>
      ) : (
        <View style={currentStyle} {...props}>
          {children}
        </View>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: 'white',
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
  paddingDisabled: {
    paddingHorizontal: 0,
    paddingVertical: 0,
  },
});

export default AppListItem;
