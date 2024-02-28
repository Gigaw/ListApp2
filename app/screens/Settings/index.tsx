import React from 'react';
import {Text, View} from 'react-native';

import AppScreenContainer from '@app/components/AppScreenContainer';
import DataAppContainer from '@app/components/DataAppContainer';
import Spacer from '@app/components/Spacer';

import {useGetUserByIdQuery} from '@app/services/UserService';

const SettingsScreen = () => {
  const {isLoading: isLoadingUser, data: user} = useGetUserByIdQuery(1);

  return (
    <AppScreenContainer>
      <DataAppContainer isLoading={isLoadingUser}>
        {/* <Image source={{uri: ''}}> */}
        <Text>{user?.name}</Text>
        <Text>{user?.email}</Text>
        <Text>{user?.phone}</Text>
        <Spacer height={10} />
      </DataAppContainer>
    </AppScreenContainer>
  );
};

export default SettingsScreen;
