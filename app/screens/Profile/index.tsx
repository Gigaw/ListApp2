import React from 'react';
import {TouchableOpacity} from 'react-native';

import AppScreenContainer from '@app/components/AppScreenContainer';
import AppText from '@app/components/AppText';
import DataAppContainer from '@app/components/DataAppContainer';
import Spacer from '@app/components/Spacer';

import {useGetUserByIdQuery} from '@app/services/UserService';

const ProfileScreen = () => {
  const {isLoading: isLoadingUser, data: user} = useGetUserByIdQuery(1);

  return (
    <AppScreenContainer>
      <DataAppContainer isLoading={isLoadingUser}>
        {/* <Image source={{uri: ''}}> */}
        <AppText fontStyle="h1">{user?.name}</AppText>
        <Spacer height={5} />

        <AppText fontStyle="h3">{user?.email}</AppText>
        <Spacer height={5} />
        <AppText fontStyle="h3">{user?.phone}</AppText>
        <Spacer height={20} />
        <TouchableOpacity onPress={() => console.log('Log out pressed')}>
          <AppText textAlign="center">Log out</AppText>
        </TouchableOpacity>
      </DataAppContainer>
    </AppScreenContainer>
  );
};

export default ProfileScreen;
