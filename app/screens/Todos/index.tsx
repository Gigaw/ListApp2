import React from 'react';
import {FlatList, StyleSheet, View} from 'react-native';

import AppScreenContainer from '@app/components/AppScreenContainer';
import AppText from '@app/components/AppText';
import DataAppContainer from '@app/components/DataAppContainer';
import Spacer from '@app/components/Spacer';

import {useGetTodosByUserIdQuery} from '@app/services/TodoService';

import GLOBAS_STYLES from '@app/constants/globalStyles';

import TodosListItem from './TodosListItem';

const TodosScreen = () => {
  const {isLoading: isLoadingTodos, data: todos} = useGetTodosByUserIdQuery(1);

  return (
    <AppScreenContainer disableHorizontalPadding>
      <DataAppContainer isLoading={isLoadingTodos}>
        <FlatList
          style={styles.container}
          ListHeaderComponent={() => (
            <>
              <AppText fontStyle="h1">Todos</AppText>
              <Spacer height={20} />
            </>
          )}
          data={todos}
          keyExtractor={item => item.id.toString()}
          renderItem={({item}) => (
            <TodosListItem onPress={() => console.log('pressed')} todo={item} />
          )}
          ItemSeparatorComponent={() => <Spacer height={10} />}
        />
      </DataAppContainer>
    </AppScreenContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: GLOBAS_STYLES.PADDING_HORIZONTAL,
  },
});

export default TodosScreen;
