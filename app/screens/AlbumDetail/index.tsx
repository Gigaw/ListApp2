import React from 'react';
import DataAppContainer from '../../components/DataAppContainer';
import ScreenContainer from '../../components/AppScreenContainer';
import {Image, Text, View} from 'react-native';
import Spacer from '../../components/Spacer';
import {SettingsProps} from '../../navigation/TabNavigation';
import {useGetPhotosByAlbumIdQuery} from '../../services/PhotoService';
import {RootStackParamList} from '../../navigation';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

type Props = NativeStackScreenProps<RootStackParamList, 'AlbumDetail'>;

const AlbumDetail = ({navigation, route}: Props) => {
  const {id, title} = route.params;
  const {isLoading: isLoadingPhotos, data: photos} =
    useGetPhotosByAlbumIdQuery(id);
  console.log(photos?.length, 'photos');
  return (
    <ScreenContainer>
      <DataAppContainer isLoading={isLoadingPhotos}>
        <Text>Photos</Text>
        <Spacer height={10} />
        <Text>{title}</Text>
        <Spacer height={10} />
        <View>
          {Array.isArray(photos) ? (
            <>
              {photos?.map(photo => (
                <View key={photo.id}>
                  <Image
                    source={{uri: photo.thumbnailUrl}}
                    style={{width: 50, height: 50}}
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

export default AlbumDetail;
