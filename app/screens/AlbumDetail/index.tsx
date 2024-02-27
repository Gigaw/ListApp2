import React from 'react';
import DataAppContainer from '../../components/DataAppContainer';
import ScreenContainer from '../../components/AppScreenContainer';
import {Dimensions, FlatList, StyleSheet, View} from 'react-native';
import Spacer from '../../components/Spacer';
import {useGetPhotosByAlbumIdQuery} from '../../services/PhotoService';
import {RootStackParamList} from '../../navigation';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import AlbumDetailHeader from './AlbumDetailHeader';
import PhotoItem from './PhotoItem';

const windowWidth = Dimensions.get('window').width;

type Props = NativeStackScreenProps<RootStackParamList, 'AlbumDetail'>;
const photoSize = (windowWidth - 2 * 10) / 3;

const AlbumDetail = ({route}: Props) => {
  const {id, title} = route.params;
  const {isLoading: isLoadingPhotos, data: photos} =
    useGetPhotosByAlbumIdQuery(id);

  return (
    <ScreenContainer disableHorizontalPadding>
      <DataAppContainer isLoading={isLoadingPhotos}>
        <View>
          <FlatList
            ListHeaderComponent={() => AlbumDetailHeader({title})}
            columnWrapperStyle={styles.columnWrapper}
            data={photos}
            numColumns={3}
            ItemSeparatorComponent={() => Spacer({height: 10})}
            keyExtractor={photo => photo.id.toString()}
            renderItem={({item: photo, index}) => (
              <PhotoItem index={index} photoSize={photoSize} photo={photo} />
            )}
          />
        </View>
      </DataAppContainer>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  columnWrapper: {
    justifyContent: 'space-between',
    marginRight: 'auto',
  },
});

export default AlbumDetail;
