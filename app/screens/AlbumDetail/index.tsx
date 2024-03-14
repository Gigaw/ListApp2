import React, {useState} from 'react';
import {Dimensions, FlatList, StyleSheet, View} from 'react-native';

import {NativeStackScreenProps} from '@react-navigation/native-stack';

import AppScreenContainer from '@app/components/AppScreenContainer';
import DataAppContainer from '@app/components/DataAppContainer';
import Spacer from '@app/components/Spacer';

import {useGetPhotosByAlbumIdQuery} from '@app/services/PhotoService';

import {RootStackParamList} from '@app/navigation';

import AlbumDetailHeader from './AlbumDetailHeader';
import ImageModal from './ImageModal';
import PhotoItem from './PhotoItem';

const windowWidth = Dimensions.get('window').width;

type Props = NativeStackScreenProps<RootStackParamList, 'AlbumDetail'>;
const photoSize = (windowWidth - 2 * 10) / 3;

const AlbumDetail = ({route}: Props) => {
  const [detailedImage, setDetailedImage] = useState<string | null>(null);
  const {id, title} = route.params;
  const {isLoading: isLoadingPhotos, data: photos} =
    useGetPhotosByAlbumIdQuery(id);

  return (
    <AppScreenContainer disableHorizontalPadding>
      <DataAppContainer isLoading={isLoadingPhotos}>
        <View>
          <FlatList
            ListHeaderComponent={<AlbumDetailHeader title={title} />}
            columnWrapperStyle={styles.columnWrapper}
            data={photos}
            numColumns={3}
            ItemSeparatorComponent={() => Spacer({height: 10})}
            keyExtractor={photo => photo.id.toString()}
            renderItem={({item: photo, index}) => (
              <PhotoItem
                testID={`photo-item-${index}`}
                onPress={() => setDetailedImage(photo.url)}
                index={index}
                photoSize={photoSize}
                photo={photo}
              />
            )}
          />
        </View>
      </DataAppContainer>
      <ImageModal
        visible={!!detailedImage}
        imageUrl={detailedImage ?? ''}
        onClose={() => setDetailedImage(null)}
      />
    </AppScreenContainer>
  );
};

const styles = StyleSheet.create({
  columnWrapper: {
    justifyContent: 'space-between',
    marginRight: 'auto',
  },
});

export default AlbumDetail;
