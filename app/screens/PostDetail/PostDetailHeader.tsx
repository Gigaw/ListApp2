import React from 'react';
import {View} from 'react-native';

import AppSmallButton from '@app/components/AppSmallButton';
import AppText from '@app/components/AppText';
import Spacer from '@app/components/Spacer';

import {Post} from '@app/models/Post';

interface Props {
  post?: Post;
  numberOfComments?: number;
  commentsShown?: boolean;
  onShowCommentsPress: () => void;
}

const PostDetailHeader = ({
  post,
  numberOfComments,
  commentsShown,
  onShowCommentsPress,
}: Props) => {
  return (
    <View>
      <AppText fontStyle="h2">{post?.title}</AppText>
      <Spacer height={10} />
      <AppText fontStyle="p0">{post?.body}</AppText>
      <Spacer height={10} />
      {Number(numberOfComments) > 0 && (
        <>
          <AppText textAlign="center">
            There are {numberOfComments} comments on the post
          </AppText>
          <Spacer height={10} />
          <AppSmallButton
            type="usual"
            text={commentsShown ? 'Hide comments' : 'Show comments'}
            onPress={() => onShowCommentsPress()}
          />
        </>
      )}
      <Spacer height={20} />
    </View>
  );
};

export default PostDetailHeader;
