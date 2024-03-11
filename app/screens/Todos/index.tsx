import React from 'react';
import {FlatList, StyleSheet} from 'react-native';

import AppHeader from '@app/components/AppHeader';
import AppScreenContainer from '@app/components/AppScreenContainer';
import DataAppContainer from '@app/components/DataAppContainer';
import Spacer from '@app/components/Spacer';

import {
  useDeleteTodoMutation,
  useGetTodosByUserIdQuery,
  useUpdateTodoStatusMutation,
} from '@app/services/TodoService';

import {useAppSelector} from '@app/hooks/redux';

import GLOBAS_STYLES from '@app/constants/globalStyles';

import TodosListItem from './TodosListItem';

const TodosScreen = () => {
  const user = useAppSelector(state => state.auth.user);
  const {isLoading: isLoadingTodos, data: todos} = useGetTodosByUserIdQuery(
    user?.id as number,
  );
  const [updateTodoStatus] = useUpdateTodoStatusMutation();
  const [deleteTodo] = useDeleteTodoMutation();

  return (
    <AppScreenContainer disableHorizontalPadding>
      <DataAppContainer isLoading={isLoadingTodos}>
        <FlatList
          style={styles.container}
          ListHeaderComponent={
            <AppHeader
              title="Todos"
              description="Tap on checkbox to mark task as done or press on bin to remove it"
            />
          }
          data={todos}
          keyExtractor={item => item.id.toString()}
          renderItem={({item}) => (
            <TodosListItem
              onDelete={() => {
                deleteTodo({id: item.id, userId: item.userId});
              }}
              onPress={() =>
                updateTodoStatus({...item, completed: !item.completed})
              }
              todo={item}
            />
          )}
          ItemSeparatorComponent={() => Spacer({height: 10})}
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
