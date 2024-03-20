import React, {useEffect} from 'react';
import {Dimensions, ImageProps, StyleSheet, View} from 'react-native';

import Animated, {
  Easing,
  ReduceMotion,
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withTiming,
} from 'react-native-reanimated';

import AppText from '@app/components/AppText';
import Spacer from '@app/components/Spacer';

const DURATION = 1000;
const TRANSLATE_X = 300;
const titleDelay = 400;
const descriptionDelay = 700;
const width = Dimensions.get('window').width;

interface Props {
  title: string;
  description: string;
  image: ImageProps;
  index: number;
  activeIndex: number;
}

const Scene = ({title, description, image, activeIndex, index}: Props) => {
  const imageOpacity = useSharedValue(0);
  const titleOpacity = useSharedValue(0);
  const descriptionOpacity = useSharedValue(0);
  const translateImage = useSharedValue(TRANSLATE_X);
  const titleTranslateX = useSharedValue(TRANSLATE_X);
  const descriptionTranslateX = useSharedValue(TRANSLATE_X);

  const timingConfig = {
    duration: DURATION,
    easing: Easing.bezier(0.25, 0.1, 0.25, 1),
    reduceMotion: ReduceMotion.System,
  };

  const isActive = activeIndex === index;

  useEffect(() => {
    if (!isActive) {
      imageOpacity.value = withTiming(0, {duration: DURATION});
      titleOpacity.value = withTiming(0, {duration: DURATION});
      descriptionOpacity.value = withTiming(0, {duration: DURATION});
      if (activeIndex < index) {
        translateImage.value = withTiming(TRANSLATE_X, timingConfig);
        titleTranslateX.value = withTiming(TRANSLATE_X, timingConfig);
        descriptionTranslateX.value = withTiming(TRANSLATE_X, timingConfig);
      } else {
        translateImage.value = withTiming(-TRANSLATE_X, timingConfig);
        titleTranslateX.value = withTiming(-TRANSLATE_X, timingConfig);
        descriptionTranslateX.value = withTiming(-TRANSLATE_X, timingConfig);
      }
    } else {
      imageOpacity.value = withDelay(100, withTiming(1, {duration: DURATION}));
      titleOpacity.value = withDelay(titleDelay, withTiming(1, timingConfig));
      descriptionOpacity.value = withDelay(
        descriptionDelay,
        withTiming(1, timingConfig),
      );
      translateImage.value = withDelay(100, withTiming(0, timingConfig));
      titleTranslateX.value = withDelay(
        titleDelay,
        withTiming(0, timingConfig),
      );
      descriptionTranslateX.value = withDelay(
        descriptionDelay,
        withTiming(0, timingConfig),
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isActive]);

  const imageAnimatedStyle = useAnimatedStyle(() => ({
    opacity: imageOpacity.value,
    transform: [{translateX: translateImage.value}],
  }));

  const titleAnimatedStyle = useAnimatedStyle(() => ({
    opacity: titleOpacity.value,
    transform: [{translateX: titleTranslateX.value}],
  }));

  const descriptionAnimatedStyle = useAnimatedStyle(() => ({
    opacity: descriptionOpacity.value,
    transform: [{translateX: descriptionTranslateX.value}],
  }));

  return (
    <View style={styles.container}>
      <Animated.Image
        source={image}
        style={[styles.img, imageAnimatedStyle]}
        resizeMode="contain"
      />
      <Spacer height={5} />
      <Animated.Text style={titleAnimatedStyle}>
        <AppText fontStyle="h3">{title}</AppText>
      </Animated.Text>

      <Spacer height={5} />
      <Animated.Text style={descriptionAnimatedStyle}>
        <AppText fontStyle="p1" style={styles.description}>
          {description}
        </AppText>
      </Animated.Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: width,
    height: 400,
    paddingHorizontal: 40,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },
  img: {
    width: 200,
    height: 200,
  },
  description: {
    textAlign: 'center',
  },
});

export default Scene;
