import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React from 'react';
import {FlatList} from 'react-native';
import AppListItem from '../../components/AppListItem';
import DataAppContainer from '../../components/DataAppContainer';
import ScreenContainer from '../../components/AppScreenContainer';
import {RootStackParamList} from '../../navigation';
import {postAPI} from '../../services/PostService';

type Props = NativeStackScreenProps<RootStackParamList, 'Main'>;

const MainScreen = ({navigation}: Props) => {
  const {
    data: posts,
    isFetching,
    refetch,
    isLoading,
  } = postAPI.useFetchPostsQuery(10);

  return (
    <ScreenContainer>
      <DataAppContainer isLoading={isLoading}>
        <FlatList
          data={posts}
          refreshing={isFetching}
          onRefresh={refetch}
          keyExtractor={el => `${el.id}`}
          renderItem={({item}) => (
            <AppListItem
              key={item.id}
              onPress={() => navigation.push('Detail', {id: item.id})}
              title={item.title}
            />
          )}
        />
      </DataAppContainer>
    </ScreenContainer>
  );
};

export default MainScreen;
