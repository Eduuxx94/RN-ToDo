import React, { useState } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export interface BottomViewProps {
    // Props
    isDone: boolean;
    title: string;
}



export function BottomView({todoList, onHandleEditTodo}: {todoList: BottomViewProps[]; onHandleEditTodo: (value: BottomViewProps[]) => void;}) {
    if (todoList.length === 0) {
      return (
        <View style={styles.bottomView}>
          <View style={styles.collumn}>
            <Text style={styles.titleText}>Ainda não tens tarefas registadas</Text>
            <Text style={[styles.normalText, { textAlign: "center" }]}>
              Cria tarefas e organiza os teus a fazeres
            </Text>
          </View>
        </View>
      );
    } else {
      return (
            <View style={styles.bottomView}>
                <View style={styles.row}>
                    <Text style={[styles.titleText, { color: '#3f9eff' }]}>
                        Criadas{' '}
                        <View style={[styles.dialogCounter]}>
                            <Text style={styles.normalText}>{todoList.length}</Text>
                        </View>
                    </Text>
                    <Text style={[styles.titleText, { color: '#9e7de5' }]}>
                        Concluídas{' '}
                        <View style={[styles.dialogCounter]}>
                            <Text style={styles.normalText}>{todoList.filter(todo => todo.isDone).length}</Text>
                        </View>
                    </Text>
                </View>
                {todoList.map((todo, index) => (
                    <>
                        <View style={styles.collumn}>
                            <View style={styles.dialogBox}>
                                <View style={styles.row}>
                                    <TouchableOpacity
                                        style={styles.radioButton}
                                        onPress={() => {
                                            const updatedTodoList = [...todoList]; // Create a copy of the todoList
                                            updatedTodoList[index].isDone = !updatedTodoList[index].isDone; // Modify the specific todo
                                            onHandleEditTodo(updatedTodoList); // Update the state with the new todo list
                                            console.log(updatedTodoList[index].isDone); // Optional: Log the new state
                                            }}>
                                        <View
                                            style={todoList[index].isDone === true
                                                ? styles.radioButtonSelected
                                                : styles.radioButtonUnselected} />
                                    </TouchableOpacity>
                                    <Text style={styles.normalText}>{todoList[index].title}</Text>
                                    <Image
                                        style={[
                                            styles.image,
                                            { width: 30, height: 30, marginRight: 10 },
                                        ]}
                                        source={require('../../assets/delete.png')} />
                                </View>
                            </View>
                        </View>
                    </>
                ))}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    bottomView : {
      flex: 1, // remaining space
      backgroundColor: '#202020',
      paddingVertical: 50,
      paddingHorizontal: 20,
    },
    image: {
      width: 50, // Set the width to your desired size
      height: 50, // Set the height to your desired size
      resizeMode: 'contain', // Optional: ensures the image maintains its aspect ratio
    },
    row: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: 10,
    },
    dialogCounter: {
      backgroundColor: '#353535',
      borderRadius: 30,
      paddingHorizontal: 2,
    },
    dialogBox: {
      backgroundColor: '#353535',
      borderRadius: 5,
      margin: 4,
      paddingVertical: 10,
      width: "100%",
    },
    normalText: {
      color: 'white',
      fontSize: 16,
      marginHorizontal: 5,
      width: '75%',
    },
    titleText: {
      fontSize: 20,
      color: 'white',
      fontWeight: 'bold',
    },
    collumn: {
      flexDirection: 'column',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    radioButton: {
      marginLeft: 10,
      width: '10%',
    },
    radioButtonUnselected: {
      height: 20,
      width: 20,
      borderRadius: 10,
      borderWidth: 2,
      borderColor: '#3f9eff',
      marginRight: 10,
    },
    radioButtonSelected: {
      height: 20,
      width: 20,
      borderRadius: 10,
      borderWidth: 2,
      borderColor: '#9e7de5',
      marginRight: 10,
      backgroundColor: '#000',
    },
  });
  