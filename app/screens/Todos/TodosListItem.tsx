import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';

import AntDesign from 'react-native-vector-icons/AntDesign';

import AppListItem from '@app/components/AppListItem';
import AppText from '@app/components/AppText';
import Spacer from '@app/components/Spacer';

import {Todo} from '@app/models/Todo';

interface Props {
  todo: Todo;
  onPress: () => void;
  onDelete: () => void;
}

const TodosListItem = ({todo, onPress, onDelete}: Props) => {
  return (
    <AppListItem paddingDisabled>
      <View style={styles.container}>
        <TouchableOpacity
          onPress={onPress}
          style={[styles.checkbox, todo.completed && styles.checkboxChecked]}
        />
        <Spacer width={10} />
        <AppText fontStyle="h3" style={styles.title}>
          {todo.title}
        </AppText>
        <TouchableOpacity style={styles.deleteButton} onPress={onDelete}>
          <AntDesign name="delete" size={16} color="red" />
        </TouchableOpacity>
      </View>
    </AppListItem>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    paddingLeft: 10,
    paddingRight: 25,
  },
  checkbox: {
    width: 20,
    height: 20,
    borderRadius: 5,
    borderWidth: 1,
  },
  title: {
    marginRight: 'auto',
    flex: 1,
  },
  deleteButton: {
    position: 'absolute',
    right: 10,
  },
  checkboxChecked: {backgroundColor: 'blue'},
});

export default TodosListItem;
