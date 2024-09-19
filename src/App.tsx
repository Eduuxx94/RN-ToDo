import React, { useState } from 'react';
import { View, StyleSheet, Dimensions, Text, Image, TextInput, TouchableHighlight, TouchableOpacity } from 'react-native';
import { TopView } from './components/topcomponent/TopView';
import { MiddleView } from './components/middlecomponent/MiddleView';
import { BottomView, BottomViewProps } from './components/bottomcomponent/BottomView';

export function App() {
  const [newTodo, setNewTodo] = useState('');
  const [todoList, setTodoList] = useState<BottomViewProps[]>([]);

  function handleNewTodo(newTodo: string) {
    const newTask = { isDone: false, title: newTodo };
    setTodoList((prevTodos) => [...prevTodos, newTask]);
    setNewTodo('');
  }

  function handleEditTodo(newTodo: BottomViewProps[]) {
    setTodoList(newTodo);
  }

  return (
    <View style={styles.container}>
      <TopView />
      <BottomView todoList={todoList} onHandleEditTodo={handleEditTodo} />
      <MiddleView placeholder="Adiciona uma nova tarefa" onSubmit={handleNewTodo} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});