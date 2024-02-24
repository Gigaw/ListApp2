import React from 'react';
import {FlatList} from 'react-native';
import AppListItem from '../../components/AppListItem';
import DataAppContainer from '../../components/DataAppContainer';
import ScreenContainer from '../../components/AppScreenContainer';
import {useGetPostsByUserIdQuery} from '../../services/PostService';
import {userAPI} from '../../services/UserService';
import {HomeProps} from '../../navigation/TabNavigation';

// type Props = NativeStackScreenProps<RootStackParamList, 'Main'>;

const HomeScreen = ({navigation}: HomeProps) => {
  const {isLoading: isLoadingUser} = userAPI.useGetUserByIdQuery(1);
  const {
    data: posts,
    isFetching,
    refetch,
    isLoading: isLoadingPosts,
  } = useGetPostsByUserIdQuery(1);

  return (
    <ScreenContainer>
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
    </ScreenContainer>
  );
};

export default HomeScreen;
