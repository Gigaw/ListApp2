import React from 'react';
import {FlatList, StyleSheet, TouchableOpacity} from 'react-native';

import AppListItem from '@app/components/AppListItem';
import AppScreenContainer from '@app/components/AppScreenContainer';
import AppText from '@app/components/AppText';
import DataAppContainer from '@app/components/DataAppContainer';
import Spacer from '@app/components/Spacer';

import {useGetPostsByUserIdQuery} from '@app/services/PostService';
import {userAPI} from '@app/services/UserService';

import GLOBAS_STYLES from '@app/constants/globalStyles';

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
    <AppScreenContainer disableHorizontalPadding>
      <DataAppContainer isLoading={isLoadingPosts || isLoadingUser}>
        <FlatList
          style={styles.container}
          data={posts}
          refreshing={isFetching}
          onRefresh={refetch}
          ListHeaderComponent={() => (
            <>
              <AppText fontStyle="h1">Posts</AppText>
              <Spacer height={20} />
            </>
          )}
          keyExtractor={el => `${el.id}`}
          renderItem={({item}) => (
            <AppListItem
              key={item.id}
              onPress={() => navigation.navigate('Detail', {id: item.id})}>
              <AppText fontStyle="h3">{item.title}</AppText>
              <Spacer height={5} />
              <TouchableOpacity onPress={() => console.log('first')}>
                <AppText>delete</AppText>
              </TouchableOpacity>
            </AppListItem>
          )}
          ItemSeparatorComponent={() => Spacer({height: 10})}
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
