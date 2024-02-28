import React from 'react';
import {FlatList, StyleSheet, View} from 'react-native';

import AppScreenContainer from '@app/components/AppScreenContainer';
import AppText from '@app/components/AppText';
import DataAppContainer from '@app/components/DataAppContainer';
import Spacer from '@app/components/Spacer';

import {useGetAlbomsByUserIdQuery} from '@app/services/AlbumService';

import GLOBAS_STYLES from '@app/constants/globalStyles';

import {AlbumsProps} from '@app/navigation/TabNavigation';

import AlbumsListItem from './AlbumsListItem';

const AlbumsScreen = ({navigation}: AlbumsProps) => {
  const {isLoading: isLoadingAlbums, data: albums} =
    useGetAlbomsByUserIdQuery(1);

  return (
    <AppScreenContainer>
      <DataAppContainer isLoading={isLoadingAlbums}>
        <AppText fontStyle="h1">Albums</AppText>
        <Spacer height={20} />
        <View>
          <FlatList
            data={albums}
            keyExtractor={item => item.id.toString()}
            renderItem={({item: album}) => (
              <AlbumsListItem
                album={album}
                onPress={() =>
                  navigation.navigate('AlbumDetail', {
                    id: album.id,
                    title: album.title,
                  })
                }
              />
            )}
            ItemSeparatorComponent={() => <Spacer height={10} />}
          />
        </View>
      </DataAppContainer>
    </AppScreenContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: GLOBAS_STYLES.PADDING_HORIZONTAL,
  },
});

export default AlbumsScreen;
