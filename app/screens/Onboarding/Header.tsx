import React, {useEffect} from 'react';
import {StyleSheet} from 'react-native';
import {Button, View} from 'react-native';

import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

import GLOBAS_STYLES from '@app/constants/globalStyles';

const DURATION = 1000;
const animationConfig = {duration: DURATION};

interface Props {
  activeIndex: number;
  backPress: () => void;
  skipPress: () => void;
  isLastSlide: boolean;
}
const Header = ({activeIndex, backPress, skipPress, isLastSlide}: Props) => {
  const backBtnOpacity = useSharedValue(0);
  const skipBtnOpacity = useSharedValue(0);
  const backBtnTranslateY = useSharedValue(-100);
  const skipBtnTranslateY = useSharedValue(-100);

  const backBtnAnimatedStyle = useAnimatedStyle(() => ({
    opacity: backBtnOpacity.value,
    transform: [{translateY: backBtnTranslateY.value}],
  }));

  const skipBtnAnimatedStyle = useAnimatedStyle(() => ({
    opacity: skipBtnOpacity.value,
    transform: [{translateY: skipBtnTranslateY.value}],
  }));

  useEffect(() => {
    if (activeIndex === 0) {
      skipBtnOpacity.value = withTiming(1, animationConfig);
      skipBtnTranslateY.value = withTiming(0, animationConfig);
    }
    if (activeIndex > 0) {
      backBtnOpacity.value = withTiming(1, animationConfig);
      backBtnTranslateY.value = withTiming(0, animationConfig);
    }

    if (isLastSlide) {
      skipBtnOpacity.value = withTiming(0, animationConfig);
      skipBtnTranslateY.value = withTiming(-100, animationConfig);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeIndex]);

  return (
    <View style={styles.headerContainer}>
      <Animated.View style={backBtnAnimatedStyle}>
        <Button title="Back" onPress={() => backPress()} />
      </Animated.View>
      <Animated.View style={skipBtnAnimatedStyle}>
        <Button title="Skip" onPress={() => skipPress()} />
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingHorizontal: GLOBAS_STYLES.PADDING_HORIZONTAL,
  },
});

export default Header;
