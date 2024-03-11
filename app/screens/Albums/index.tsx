import React, {useRef, useState} from 'react';
import {Alert, FlatList, StyleSheet, View} from 'react-native';

import ActionSheet from 'react-native-actionsheet';

import AppScreenContainer from '@app/components/AppScreenContainer';
import AppText from '@app/components/AppText';
import DataAppContainer from '@app/components/DataAppContainer';
import Spacer from '@app/components/Spacer';

import {
  useDeleteAlbumMutation,
  useGetAlbumsByUserIdQuery,
} from '@app/services/AlbumService';

import {useAppSelector} from '@app/hooks/redux';

import {Album} from '@app/models/Album';

import GLOBAS_STYLES from '@app/constants/globalStyles';

import {AlbumsProps} from '@app/navigation/TabNavigation';

import AlbumsListItem from './AlbumsListItem';
import EditAlbumNameModal from './EditAlbumNameModal';

const options = ['Cancel', 'Edit album name', 'Remove album'];

const AlbumsScreen = ({navigation}: AlbumsProps) => {
  const user = useAppSelector(state => state.auth.user);
  const actionSheetRef = useRef<ActionSheet>(null);
  const {isLoading: isLoadingAlbums, data: albums} = useGetAlbumsByUserIdQuery(
    user?.id as number,
  );
  const [editAlbum, setEditAlbum] = useState<Album | null>(null);
  const [showEditModal, setShowEditModal] = useState(false);
  const [deleteAlbum] = useDeleteAlbumMutation();

  const createDeleteAlbumConfirmationAlert = () =>
    Alert.alert(
      'Delete album',
      'Are you sure that you want to delete ' + editAlbum?.title + ' ?',
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {text: 'OK', onPress: () => deleteAlbum(editAlbum?.id as number)},
      ],
    );

  return (
    <AppScreenContainer disableHorizontalPadding>
      <DataAppContainer isLoading={isLoadingAlbums}>
        <FlatList
          style={styles.list}
          contentContainerStyle={styles.listContentContainer}
          data={albums}
          ListHeaderComponent={
            <View>
              <AppText fontStyle="h1">Albums</AppText>
              <Spacer height={20} />
            </View>
          }
          keyExtractor={item => item.id.toString()}
          renderItem={({item: album}) => (
            <AlbumsListItem
              album={album}
              onLongPress={() => {
                setEditAlbum(album);
                actionSheetRef.current?.show();
              }}
              onPress={() => {
                navigation.navigate('AlbumDetail', {
                  id: album.id,
                  title: album.title,
                });
              }}
            />
          )}
          ItemSeparatorComponent={() => Spacer({height: 10})}
          ListFooterComponent={<Spacer height={20} />}
        />
      </DataAppContainer>
      <EditAlbumNameModal
        visible={!!showEditModal}
        album={editAlbum}
        onCancel={() => setShowEditModal(false)}
        onConfirm={() => setShowEditModal(false)}
      />
      <ActionSheet
        ref={actionSheetRef}
        title={'What do you want to do to the album?'}
        options={options}
        cancelButtonIndex={0}
        destructiveButtonIndex={2}
        onPress={index => {
          switch (index) {
            case 1:
              setShowEditModal(true);
              break;
            case 2:
              createDeleteAlbumConfirmationAlert();
              break;
            default:
              setEditAlbum(null);
              break;
          }
        }}
      />
    </AppScreenContainer>
  );
};

const styles = StyleSheet.create({
  list: {
    flex: 1,
    paddingHorizontal: GLOBAS_STYLES.PADDING_HORIZONTAL,
  },
  listContentContainer: {},
});

export default AlbumsScreen;
