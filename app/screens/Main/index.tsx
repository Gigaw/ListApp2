import React from 'react';
import {FlatList} from 'react-native';

import AppListItem from '@app/components/AppListItem';
import AppScreenContainer from '@app/components/AppScreenContainer';
import DataAppContainer from '@app/components/DataAppContainer';

import {useGetPostsByUserIdQuery} from '@app/services/PostService';
import {userAPI} from '@app/services/UserService';

import {HomeProps} from '@app/navigation/TabNavigation';

const HomeScreen = ({navigation}: HomeProps) => {
  const {isLoading: isLoadingUser} = userAPI.useGetUserByIdQuery(1);
  const {
    data: posts,
    isFetching,
    refetch,
    isLoading: isLoadingPosts,
  } = useGetPostsByUserIdQuery(1);

  return (
    <AppScreenContainer>
      <DataAppContainer isLoading={isLoadingPosts || isLoadingUser}>
        <FlatList
          data={posts}
          refreshing={isFetching}
          onRefresh={refetch}
          keyExtractor={el => `${el.id}`}
          renderItem={({item}) => (
            <AppListItem
              key={item.id}
              onPress={() => navigation.navigate('Detail', {id: item.id})}
              title={item.title}
            />
          )}
        />
      </DataAppContainer>
    </AppScreenContainer>
  );
};

export default HomeScreen;
