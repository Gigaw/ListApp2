import React, {useState} from 'react';
import {FlatList, StyleSheet} from 'react-native';

import {NativeStackScreenProps} from '@react-navigation/native-stack';

import AppScreenContainer from '@app/components/AppScreenContainer';
import AppText from '@app/components/AppText';
import DataAppContainer from '@app/components/DataAppContainer';

import {useGetCommentsByPostIdQuery} from '@app/services/CommentService';
import {postAPI} from '@app/services/PostService';

import GLOBAS_STYLES from '@app/constants/globalStyles';

import {RootStackParamList} from '@app/navigation';

import CommentsListItem from './CommentsListItem';
import PostDetailHeader from './PostDetailHeader';

type Props = NativeStackScreenProps<RootStackParamList, 'Detail'>;

const DetailScreen = ({route}: Props) => {
  const [commentsShown, setCommentsShown] = useState(false);
  const {data: post, isLoading} = postAPI.useFetchDetailPostQuery(
    route.params.id,
  );
  const {data: comments, isLoading: isLoadingComments} =
    useGetCommentsByPostIdQuery(route.params.id);

  return (
    <AppScreenContainer disableHorizontalPadding>
      <DataAppContainer isLoading={isLoading || isLoadingComments}>
        <FlatList
          style={styles.container}
          // TEMPORARY
          // eslint-disable-next-line react/no-unstable-nested-components
          ListHeaderComponent={() => (
            <PostDetailHeader
              post={post}
              numberOfComments={5}
              commentsShown={commentsShown}
              onShowCommentsPress={() => setCommentsShown(prev => !prev)}
            />
          )}
          data={comments}
          renderItem={({item}) => (
            <>{commentsShown && <CommentsListItem item={item} />}</>
          )}
          // TEMPORARY
          // eslint-disable-next-line react/no-unstable-nested-components
          ListEmptyComponent={() => (
            <AppText textAlign="center" fontStyle={'h1'}>
              No comments
            </AppText>
          )}
        />
      </DataAppContainer>
    </AppScreenContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: GLOBAS_STYLES.PADDING_HORIZONTAL,
  },
});

export default DetailScreen;
