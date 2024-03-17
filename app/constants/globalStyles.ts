import {FadeInLeft} from 'react-native-reanimated';

const GLOBAS_STYLES = {
  PADDING_HORIZONTAL: 20,
};

export const GLOBAL_ANIMATIONS = {
  FADE_IN_LEFT_HEADER: FadeInLeft.duration(500),
  FADE_IN_LEFT_ITEM: FadeInLeft.duration(500).delay(200),
};
export default GLOBAS_STYLES;
