import React from 'react';
import {FlatList, StyleSheet} from 'react-native';

import AppHeader from '@app/components/AppHeader';
import AppListItem from '@app/components/AppListItem';
import AppScreenContainer from '@app/components/AppScreenContainer';
import AppText from '@app/components/AppText';
import DataAppContainer from '@app/components/DataAppContainer';
import Spacer from '@app/components/Spacer';

import {useGetPostsByUserIdQuery} from '@app/services/PostService';

import {useAppSelector} from '@app/hooks/redux';

import GLOBAS_STYLES from '@app/constants/globalStyles';

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
            <AppHeader
              title="Posts"
              description="Here you can see all your posts. Click on one to see the details."
            />
          }
          keyExtractor={el => `${el.id}`}
          renderItem={({item}) => (
            <AppListItem
              key={item.id}
              onPress={() => navigation.navigate('Detail', {id: item.id})}>
              <AppText fontStyle="h3">{item.title}</AppText>
              <Spacer height={5} />
            </AppListItem>
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