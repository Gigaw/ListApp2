import React from 'react';
import {Text, View} from 'react-native';

import AppScreenContainer from '@app/components/AppScreenContainer';
import DataAppContainer from '@app/components/DataAppContainer';
import Spacer from '@app/components/Spacer';

import {useGetAlbomsByUserIdQuery} from '@app/services/AlbumService';
import {useGetUserByIdQuery} from '@app/services/UserService';

import {SettingsProps} from '@app/navigation/TabNavigation';

import AlbumListItem from './AlbumListItem';

const SettingsScreen = ({navigation}: SettingsProps) => {
  const {isLoading: isLoadingUser, data: user} = useGetUserByIdQuery(1);
  const {isLoading: isLoadingAlbums, data: albums} =
    useGetAlbomsByUserIdQuery(1);

  return (
    <AppScreenContainer>
      <DataAppContainer isLoading={isLoadingUser || isLoadingAlbums}>
        {/* <Image source={{uri: ''}}> */}
        <Text>{user?.name}</Text>
        <Text>{user?.email}</Text>
        {/* <Text>{user?.company}</Text> */}
        <Text>{user?.phone}</Text>
        <Spacer height={10} />
        <Text>Albums</Text>
        <Spacer height={10} />
        <View>
          {Array.isArray(albums) ? (
            <>
              {albums?.map(album => (
                <View key={album.id}>
                  <AlbumListItem
                    album={album}
                    onPress={() =>
                      navigation.navigate('AlbumDetail', {
                        id: album.id,
                        title: album.title,
                      })
                    }
                  />
                  <Spacer height={10} />
                </View>
              ))}
            </>
          ) : null}
        </View>
      </DataAppContainer>
    </AppScreenContainer>
  );
};

export default SettingsScreen;
