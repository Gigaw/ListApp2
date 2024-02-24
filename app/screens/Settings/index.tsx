import React from 'react';
import DataAppContainer from '../../components/DataAppContainer';
import ScreenContainer from '../../components/AppScreenContainer';
import {useGetUserByIdQuery} from '../../services/UserService';
import {Text, View} from 'react-native';
import {useGetAlbomsByUserIdQuery} from '../../services/AlbumService';
import Spacer from '../../components/Spacer';
import AlbumListItem from './AlbumListItem';
import {SettingsProps} from '../../navigation/TabNavigation';

const SettingsScreen = ({navigation}: SettingsProps) => {
  const {isLoading: isLoadingUser, data: user} = useGetUserByIdQuery(1);
  const {isLoading: isLoadingAlbums, data: albums} =
    useGetAlbomsByUserIdQuery(1);

  return (
    <ScreenContainer>
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
    </ScreenContainer>
  );
};

export default SettingsScreen;
