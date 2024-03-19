import React, {useEffect} from 'react';
import {StyleSheet} from 'react-native';
import {Image} from 'react-native';

import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withSpring,
  withTiming,
} from 'react-native-reanimated';

const DELAY = 900;
const TIME = 600;
const NoteImage = () => {
  const scale = useSharedValue(0.5);
  const rotate = useSharedValue(0);
  const opacity = useSharedValue(0);
  const animatedStyles = useAnimatedStyle(() => ({
    opacity: opacity.value,
    transform: [{scale: scale.value}, {rotate: rotate.value + 'deg'}],
  }));

  useEffect(() => {
    scale.value = withDelay(DELAY, withSpring(1, {duration: TIME}));
    rotate.value = withDelay(DELAY, withSpring(360));
    opacity.value = withDelay(DELAY, withTiming(1, {duration: TIME / 2}));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <Animated.View
      style={[{backgroundColor: 'wite', zIndex: 10}, animatedStyles]}>
      <Image
        style={styles.appImage}
        source={require('/assets/img/list-icon.png')}
        resizeMode="contain"
      />
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  appImage: {
    width: 100,
    height: 100,
  },
});

export default NoteImage;
