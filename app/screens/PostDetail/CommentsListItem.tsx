import React, {useState} from 'react';
import {TouchableOpacity} from 'react-native';

import AppListItem from '@app/components/AppListItem';
import AppText from '@app/components/AppText';
import Spacer from '@app/components/Spacer';

import {Comment} from '@app/models/Comment';

interface Props {
  item: Comment;
}

const CommentsListItem = ({item}: Props) => {
  const [showMore, setShowMore] = useState(false);

  return (
    <AppListItem>
      <AppText fontStyle="h4">{item.name}</AppText>
      <Spacer height={5} />
      <AppText fontStyle="h5">{item.email}</AppText>
      <Spacer height={5} />
      <AppText fontStyle="p1" numberOfLines={showMore ? 0 : 1}>
        {item.body}
      </AppText>
      <Spacer height={5} />
      <TouchableOpacity onPress={() => setShowMore(prev => !prev)}>
        <AppText fontStyle="h5" numberOfLines={1}>
          {showMore ? 'Show less' : 'Show more'}
        </AppText>
      </TouchableOpacity>
    </AppListItem>
  );
};

export default CommentsListItem;