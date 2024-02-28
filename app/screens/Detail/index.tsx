import React from 'react';
import {ScrollView, StyleSheet, Text} from 'react-native';

import {NativeStackScreenProps} from '@react-navigation/native-stack';

import AppScreenContainer from '@app/components/AppScreenContainer';
import DataAppContainer from '@app/components/DataAppContainer';

import {postAPI} from '@app/services/PostService';

import {RootStackParamList} from '@app/navigation';

type Props = NativeStackScreenProps<RootStackParamList, 'Detail'>;

const DetailScreen = ({route}: Props) => {
  const {data: post, isLoading} = postAPI.useFetchDetailPostQuery(
    route.params.id,
  );

  return (
    <AppScreenContainer>
      <DataAppContainer isLoading={isLoading}>
        <ScrollView>
          <Text style={styles.title}>{post?.title}</Text>
          <Text style={styles.description}>{post?.body}</Text>
        </ScrollView>
      </DataAppContainer>
    </AppScreenContainer>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: '700',
    marginBottom: 20,
  },
  description: {
    fontSize: 16,
    fontWeight: '400',
  },
});

export default DetailScreen;
