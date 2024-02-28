import React from 'react';
import {TouchableOpacity, View} from 'react-native';

import AppText from '@app/components/AppText';
import Spacer from '@app/components/Spacer';

import {Post} from '@app/models/Post';

interface Props {
  post?: Post;
  numberOfComments?: number;
  commentsShown?: boolean;
  onShowCommentsPress?: () => void;
}

const PostDetailHeader = ({
  post,
  numberOfComments,
  commentsShown,
  onShowCommentsPress,
}: Props) => {
  return (
    <View>
      <AppText fontStyle="h1">{post?.title}</AppText>
      <Spacer height={10} />
      <AppText fontStyle="p1">{post?.body}</AppText>
      <Spacer height={10} />
      {Number(numberOfComments) > 0 && (
        <>
          <AppText fontStyle="p1" textAlign="center">
            There are {numberOfComments} comments on the post
          </AppText>
          <Spacer height={10} />
          <TouchableOpacity onPress={onShowCommentsPress}>
            <AppText fontStyle="p1" textAlign="center">
              {commentsShown ? 'Hide comments' : 'Show comments'}
            </AppText>
          </TouchableOpacity>
        </>
      )}

      <Spacer height={20} />
    </View>
  );
};

export default PostDetailHeader;
