import React from 'react';
import {
  StyleProp,
  StyleSheet,
  Text,
  TouchableOpacity,
  ViewStyle,
} from 'react-native';

import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

interface Props {
  text: string;
  onPress: () => void;
  style?: StyleProp<ViewStyle>;
  disabled?: boolean;
  testID?: string;
}
const AnimatedTouchableOpacity =
  Animated.createAnimatedComponent(TouchableOpacity);
const AppButton = ({text, onPress, style, disabled, testID}: Props) => {
  const isDisabledAnimatedValue = useSharedValue(disabled ? 'grey' : 'black');

  if (disabled) {
    isDisabledAnimatedValue.value = withTiming('grey');
  } else {
    isDisabledAnimatedValue.value = withTiming('black');
  }
  const animatedStyle = useAnimatedStyle(() => ({
    backgroundColor: isDisabledAnimatedValue.value,
  }));

  return (
    <AnimatedTouchableOpacity
      testID={testID}
      style={[styles.container, style, animatedStyle]}
      onPress={onPress}
      disabled={disabled}>
      <Text style={styles.text}>{text}</Text>
    </AnimatedTouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingHorizontal: 20,
    paddingVertical: 20,
    backgroundColor: 'black',
    borderRadius: 10,
  },
  text: {
    fontSize: 18,
    fontWeight: '700',
    color: 'white',
    textAlign: 'center',
  },
  disabled: {
    backgroundColor: 'grey',
  },
});
export default AppButton;
