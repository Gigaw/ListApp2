import React from 'react';
import {StyleSheet, View} from 'react-native';
import {useDispatch} from 'react-redux';

import AppButton from '@app/components/AppButton';
import AppScreenContainer from '@app/components/AppScreenContainer';
import AppText from '@app/components/AppText';
import DataAppContainer from '@app/components/DataAppContainer';
import Spacer from '@app/components/Spacer';

import {useGetUserByIdQuery} from '@app/services/UserService';

import {logout, setIsAuthorized} from '@app/store/reducers/AuthSlice';

const ProfileScreen = () => {
  const {isLoading: isLoadingUser, data: user} = useGetUserByIdQuery(1);
  const dispatch = useDispatch();

  return (
    <AppScreenContainer>
      <DataAppContainer isLoading={isLoadingUser}>
        <View style={styles.infoContainer}>
          <AppText fontStyle="h1">{user?.name}</AppText>
          <Spacer height={5} />
          <AppText fontStyle="h3">{user?.email}</AppText>
          <Spacer height={5} />
          <AppText fontStyle="h3">{user?.phone}</AppText>
          <Spacer height={50} />
          <AppButton
            text="Log out"
            style={styles.button}
            onPress={() => dispatch(logout())}
          />
        </View>
      </DataAppContainer>
    </AppScreenContainer>
  );
};

const styles = StyleSheet.create({
  infoContainer: {
    alignItems: 'center',
  },
  button: {
    width: 200,
    paddingVertical: 10,
  },
});

export default ProfileScreen;
