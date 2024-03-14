import React from 'react';
import {StyleSheet, View} from 'react-native';
import {useDispatch} from 'react-redux';

import AppButton from '@app/components/AppButton';
import AppScreenContainer from '@app/components/AppScreenContainer';
import AppText from '@app/components/AppText';
import Spacer from '@app/components/Spacer';

import {useAppSelector} from '@app/hooks/redux';

import {logout} from '@app/store/reducers/AuthSlice';

const ProfileScreen = () => {
  const user = useAppSelector(state => state.auth.user);
  const dispatch = useDispatch();

  return (
    <AppScreenContainer>
      <View style={styles.infoContainer}>
        <AppText fontStyle="h1">{user?.name}</AppText>
        <Spacer height={5} />
        <AppText fontStyle="h3">{user?.email}</AppText>
        <Spacer height={5} />
        <AppText fontStyle="h3">{user?.phone}</AppText>
        <Spacer height={50} />
        <AppButton
          testID="logout-button"
          text="Log out"
          style={styles.button}
          onPress={() => dispatch(logout())}
        />
      </View>
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
