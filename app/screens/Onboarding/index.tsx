import React, {useRef, useState} from 'react';
import {FlatList, StyleSheet, View} from 'react-native';

import Animated from 'react-native-reanimated';

import AppScreenContainer from '@app/components/AppScreenContainer';
import DataAppContainer from '@app/components/DataAppContainer';

import {useAppDispatch} from '@app/hooks/redux';

import {setIsOnboardingShown} from '@app/store/reducers/AppSlice';

import Footer from './Footer';
import Header from './Header';
import Scene from './Scene';

const DATA = [
  {
    id: 1,
    title: 'Posts',
    description:
      'You can see all the posts previews. You can also open detail page and see comments.',
    image: require('/assets/img/post.png'),
  },
  {
    id: 2,
    title: 'Albums',
    description:
      'You can see all the albums and photos here. You can also exit their names or delete them.',
    image: require('/assets/img/albums.png'),
  },
  {
    id: 3,
    title: 'Tasks',
    description:
      'You can see all the taks here. You can also mark them as done or delete them.',
    image: require('/assets/img/tasks.png'),
  },
];

const Onboarding = () => {
  const dispatch = useAppDispatch();
  const flatListRef = useRef<FlatList>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const nextPress = (index: number) => {
    if (index < DATA.length - 1) {
      flatListRef?.current?.scrollToIndex({
        animated: true,
        index: index + 1,
      });
    }
  };

  const backPress = (index: number) => {
    if (index >= 1) {
      flatListRef?.current?.scrollToIndex({
        animated: true,
        index: index - 1,
      });
    }
  };

  const finishOnboarding = () => {
    dispatch(setIsOnboardingShown(true));
  };

  return (
    <AppScreenContainer disableHorizontalPadding>
      <DataAppContainer isLoading={false}>
        <Header
          activeIndex={activeIndex}
          backPress={() => backPress(activeIndex)}
          skipPress={() => finishOnboarding()}
          isLastSlide={activeIndex === DATA.length - 1}
        />
        <View style={styles.flatListContainer}>
          <Animated.FlatList
            ref={flatListRef}
            horizontal
            data={DATA}
            showsHorizontalScrollIndicator={false}
            pagingEnabled
            style={styles.flatList}
            onViewableItemsChanged={event => {
              setActiveIndex(event.viewableItems[0].index ?? 0);
            }}
            renderItem={({item, index}) => (
              <Scene index={index} activeIndex={activeIndex} {...item} />
            )}
            keyExtractor={item => item.id.toString()}
          />
        </View>
        <View>
          {DATA.map((_, index) => (
            <Animated.View key={index} />
          ))}
        </View>
        <Footer
          isLastSlide={activeIndex === DATA.length - 1}
          onLoginPress={() => finishOnboarding()}
          onNextPress={() => nextPress(activeIndex)}
        />
      </DataAppContainer>
    </AppScreenContainer>
  );
};

const styles = StyleSheet.create({
  flatListContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  flatList: {
    maxHeight: 400,
  },
});

export default Onboarding;
