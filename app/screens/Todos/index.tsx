import React from 'react';
import {StyleSheet} from 'react-native';

import Animated, {
  FadeOutLeft,
  FlipInEasyX,
  LinearTransition,
} from 'react-native-reanimated';

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

import GLOBAS_STYLES, {GLOBAL_ANIMATIONS} from '@app/constants/globalStyles';

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
        <Animated.FlatList
          itemLayoutAnimation={LinearTransition.delay(500)}
          style={styles.container}
          ListHeaderComponent={
            <Animated.View entering={GLOBAL_ANIMATIONS.FADE_IN_LEFT_HEADER}>
              <AppHeader
                title="Todos"
                description="Tap on checkbox to mark task as done or press on bin to remove it"
              />
            </Animated.View>
          }
          data={todos}
          keyExtractor={item => item.id.toString()}
          renderItem={({item, index}) => (
            <Animated.View
              exiting={FadeOutLeft.duration(500)}
              entering={FlipInEasyX.duration(500)}>
              <TodosListItem
                testID={`todo-item-${index}`}
                onDelete={() => {
                  deleteTodo({id: item.id, userId: item.userId});
                }}
                onPress={() =>
                  updateTodoStatus({...item, completed: !item.completed})
                }
                todo={item}
              />
            </Animated.View>
          )}
          ItemSeparatorComponent={() => Spacer({height: 10})}
          ListFooterComponent={<Spacer height={100} />}
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
