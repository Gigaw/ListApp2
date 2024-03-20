import React, {useEffect} from 'react';
import {Button, StyleSheet} from 'react-native';
import {View} from 'react-native';

import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

const DURATION = 1000;

interface Props {
  onNextPress: () => void;
  onLoginPress: () => void;
  isLastSlide: boolean;
}

const Footer = ({onNextPress, onLoginPress, isLastSlide}: Props) => {
  const nextBtnOpacity = useSharedValue(1);
  const startBtnOpacity = useSharedValue(0);
  const nextBtnTranslateX = useSharedValue(0);
  const startBtnTranslateX = useSharedValue(200);

  const nextBtnAnimatedStyle = useAnimatedStyle(() => ({
    opacity: nextBtnOpacity.value,
    transform: [{translateX: nextBtnTranslateX.value}],
  }));
  const startBtnAnimatedStyle = useAnimatedStyle(() => ({
    opacity: startBtnOpacity.value,
    transform: [{translateX: startBtnTranslateX.value}],
  }));

  useEffect(() => {
    if (isLastSlide) {
      nextBtnOpacity.value = withTiming(0, {duration: DURATION});
      nextBtnTranslateX.value = withTiming(-200, {duration: DURATION});
      startBtnOpacity.value = withTiming(1, {duration: DURATION});
      startBtnTranslateX.value = withTiming(0, {duration: DURATION});
    } else {
      nextBtnOpacity.value = withTiming(1, {duration: DURATION});
      nextBtnTranslateX.value = withTiming(0, {duration: DURATION});
      startBtnOpacity.value = withTiming(0, {duration: DURATION});
      startBtnTranslateX.value = withTiming(200, {duration: DURATION});
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLastSlide]);

  return (
    <View style={styles.footerContainer}>
      <Animated.View style={[styles.footerBtn, nextBtnAnimatedStyle]}>
        <Button title="Next" onPress={() => onNextPress()} />
      </Animated.View>
      <Animated.View style={[styles.footerBtn, startBtnAnimatedStyle]}>
        <Button title="Login" onPress={() => onLoginPress()} />
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  footerContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: 100,
  },
  footerBtn: {
    position: 'absolute',
    top: 0,
  },
});

export default Footer;
