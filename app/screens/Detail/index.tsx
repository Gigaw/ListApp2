import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React from 'react';
import {ScrollView, StyleSheet, Text} from 'react-native';
import DataAppContainer from '../../components/DataAppContainer';
import ScreenContainer from '../../components/AppScreenContainer';
import {RootStackParamList} from '../../navigation';
import {postAPI} from '../../services/PostService';

type Props = NativeStackScreenProps<RootStackParamList, 'Detail'>;

const DetailScreen = ({route}: Props) => {
  const {data: post, isLoading} = postAPI.useFetchDetailPostQuery(
    route.params.id,
  );

  return (
    <ScreenContainer>
      <DataAppContainer isLoading={isLoading}>
        <ScrollView>
          <Text style={styles.title}>{post?.title}</Text>
          <Text style={styles.description}>{post?.body}</Text>
        </ScrollView>
      </DataAppContainer>
    </ScreenContainer>
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
