import React from 'react';
import DataAppContainer from '../../components/DataAppContainer';
import ScreenContainer from '../../components/AppScreenContainer';
import {userAPI} from '../../services/UserService';
import {Text} from 'react-native';

const SettingsScreen = ({navigation}) => {
  const {isLoading: isLoadingUser, data: user} = userAPI.useGetUserByIdQuery(1);

  return (
    <ScreenContainer>
      <DataAppContainer isLoading={isLoadingUser}>
        {/* <Image source={{uri: ''}}> */}
        <Text>{user?.name}</Text>
      </DataAppContainer>
    </ScreenContainer>
  );
};

export default SettingsScreen;
