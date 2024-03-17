import React, {useRef, useState} from 'react';
import {Alert, FlatList, StyleSheet} from 'react-native';

import ActionSheet from 'react-native-actionsheet';
import Animated from 'react-native-reanimated';

import AppHeader from '@app/components/AppHeader';
import AppScreenContainer from '@app/components/AppScreenContainer';
import DataAppContainer from '@app/components/DataAppContainer';
import Spacer from '@app/components/Spacer';

import {
  useDeleteAlbumMutation,
  useGetAlbumsByUserIdQuery,
} from '@app/services/AlbumService';

import {useAppSelector} from '@app/hooks/redux';

import {Album} from '@app/models/Album';

import GLOBAS_STYLES, {GLOBAL_ANIMATIONS} from '@app/constants/globalStyles';

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
            <Animated.View entering={GLOBAL_ANIMATIONS.FADE_IN_LEFT_HEADER}>
              <AppHeader
                title="Albums"
                description="Here you can see all your albums. Click on one to see the details or press longer to edit or delete."
              />
            </Animated.View>
          }
          keyExtractor={item => item.id.toString()}
          renderItem={({item: album, index}) => (
            <Animated.View entering={GLOBAL_ANIMATIONS.FADE_IN_LEFT_ITEM}>
              <AlbumsListItem
                album={album}
                testID={`album-item-${index}`}
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
            </Animated.View>
          )}
          ItemSeparatorComponent={() => Spacer({height: 10})}
          ListFooterComponent={<Spacer height={20} />}
        />
      </DataAppContainer>
      {!!showEditModal && (
        <EditAlbumNameModal
          visible={!!showEditModal}
          album={editAlbum}
          onCancel={() => setShowEditModal(false)}
          onConfirm={() => setShowEditModal(false)}
        />
      )}
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
