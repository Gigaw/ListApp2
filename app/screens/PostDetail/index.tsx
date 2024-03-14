import React, {useState} from 'react';
import {FlatList, StyleSheet} from 'react-native';

import {NativeStackScreenProps} from '@react-navigation/native-stack';

import AppScreenContainer from '@app/components/AppScreenContainer';
import AppText from '@app/components/AppText';
import DataAppContainer from '@app/components/DataAppContainer';
import Spacer from '@app/components/Spacer';

import {useGetCommentsByPostIdQuery} from '@app/services/CommentService';
import {postAPI} from '@app/services/PostService';

import GLOBAS_STYLES from '@app/constants/globalStyles';

import {RootStackParamList} from '@app/navigation';

import CommentsListItem from './CommentsListItem';
import PostDetailBody from './PostDetailBody';

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
          testID="comments-list"
          style={styles.container}
          ListHeaderComponent={
            <PostDetailBody
              post={post}
              numberOfComments={comments?.length || 0}
              commentsShown={commentsShown}
              onShowCommentsPress={() => setCommentsShown(prev => !prev)}
            />
          }
          data={comments}
          renderItem={({item, index}) => (
            <>
              {commentsShown && (
                <CommentsListItem item={item} testID={`comment-${index}`} />
              )}
            </>
          )}
          ListEmptyComponent={
            <AppText textAlign="center" fontStyle={'h1'}>
              No comments
            </AppText>
          }
          ItemSeparatorComponent={() => Spacer({height: 10})}
          ListFooterComponent={<Spacer height={20} />}
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
