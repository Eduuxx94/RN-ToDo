import React, { useState } from 'react';
import { View, StyleSheet, Dimensions, Text, Image, TextInput, TouchableHighlight, TouchableOpacity } from 'react-native';
import { TopView } from './components/topcomponent/TopView';
import { MiddleView } from './components/middlecomponent/MiddleView';
import { BottomView } from './components/bottomcomponent/BottomView';

export function App() {
  const [newTodo, setNewTodo] = useState('');
  
  function handleNewTodo(newTodo: string) {
    setNewTodo(newTodo);
  }

    return (
      <View style={styles.container}>
        <TopView />
        <BottomView />
        <MiddleView placeholder='Adiciona uma nova tarefa' onSubmit={handleNewTodo}/>
      </View>
    );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
