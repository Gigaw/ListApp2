import React from 'react';
import {FlatList, StyleSheet} from 'react-native';

import Animated from 'react-native-reanimated';

import AppHeader from '@app/components/AppHeader';
import AppListItem from '@app/components/AppListItem';
import AppScreenContainer from '@app/components/AppScreenContainer';
import AppText from '@app/components/AppText';
import DataAppContainer from '@app/components/DataAppContainer';
import Spacer from '@app/components/Spacer';

import {useGetPostsByUserIdQuery} from '@app/services/PostService';

import {useAppSelector} from '@app/hooks/redux';

import GLOBAS_STYLES, {GLOBAL_ANIMATIONS} from '@app/constants/globalStyles';

import {PostsProps} from '@app/navigation/TabNavigation';

const HomeScreen = ({navigation}: PostsProps) => {
  const user = useAppSelector(state => state.auth.user);
  const {
    data: posts,
    isFetching,
    refetch,
    isLoading: isLoadingPosts,
  } = useGetPostsByUserIdQuery(user?.id as number);

  return (
    <AppScreenContainer disableHorizontalPadding>
      <DataAppContainer isLoading={isLoadingPosts}>
        <FlatList
          style={styles.container}
          data={posts}
          refreshing={isFetching}
          onRefresh={refetch}
          ListHeaderComponent={
            <Animated.View entering={GLOBAL_ANIMATIONS.FADE_IN_LEFT_HEADER}>
              <AppHeader
                title="Posts"
                description="Here you can see all your posts. Click on one to see the details."
              />
            </Animated.View>
          }
          keyExtractor={el => `${el.id}`}
          renderItem={({item, index}) => (
            <Animated.View entering={GLOBAL_ANIMATIONS.FADE_IN_LEFT_ITEM}>
              <AppListItem
                key={item.id}
                testID={`post-item-${index}`}
                onPress={() => navigation.navigate('Detail', {id: item.id})}>
                <AppText fontStyle="h3">{item.title}</AppText>
                <Spacer height={5} />
              </AppListItem>
            </Animated.View>
          )}
          ItemSeparatorComponent={() => Spacer({height: 10})}
          ListFooterComponent={<Spacer height={20} />}
        />
      </DataAppContainer>
    </AppScreenContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: GLOBAS_STYLES.PADDING_HORIZONTAL,
  },
});

export default HomeScreen;
