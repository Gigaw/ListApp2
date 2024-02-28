import React from 'react';
import {StyleSheet, View} from 'react-native';

import AppListItem from '@app/components/AppListItem';
import AppText from '@app/components/AppText';
import Spacer from '@app/components/Spacer';

import {Todo} from '@app/models/Todo';

interface Props {
  todo: Todo;
  onPress: () => void;
}

const TodosListItem = ({todo, onPress}: Props) => {
  return (
    <AppListItem onPress={onPress}>
      <View style={styles.container}>
        <View
          style={[styles.checkbox, todo.completed && styles.checkboxChecked]}
        />
        <Spacer width={10} />
        <AppText fontStyle="h3">{todo.title}</AppText>
      </View>
    </AppListItem>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkbox: {
    width: 20,
    height: 20,
    borderRadius: 5,
    borderWidth: 1,
  },
  checkboxChecked: {backgroundColor: 'blue'},
});

export default TodosListItem;
