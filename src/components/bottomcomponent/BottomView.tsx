import React, { useState } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export function BottomView() {
    const [selected, setSelected] = useState(null); // Keep track of the selected option

  const handlePress = (value: any) => {
    setSelected(value); // Update selected radio button
  };
  
    return (
        <View style={styles.bottomView}>
          {/* Component at the bottom of the boundary */}
          <View style={styles.row}>
            <Text style={[styles.titleText, {color: '#3f9eff'}]}>
              Criadas{' '}
              <View style={[styles.dialogCounter]}>
                <Text style={styles.normalText}>1</Text>
              </View>
            </Text>
            <Text style={[styles.titleText, {color: '#9e7de5'}]}>
              Concluídas{' '}
              <View style={[styles.dialogCounter]}>
                <Text style={styles.normalText}>1</Text>
              </View>
            </Text>
          </View>
          <View style={styles.collumn}>
            <View style={styles.dialogBox}>
              <View style={styles.row}>
                <TouchableOpacity
                  style={styles.radioButton}
                  onPress={() => handlePress('Option 2')}>
                  <View
                    style={
                      selected === 'Option 2'
                        ? styles.radioButtonSelected
                        : styles.radioButtonUnselected
                    }
                  />
                </TouchableOpacity>
                <Text style={styles.normalText}>sdfsdfs sdfs d</Text>
                <Image
                  style={[
                    styles.image,
                    {width: 30, height: 30, marginRight: 10},
                  ]}
                  source={require('../../assets/delete.png')}
                />
              </View>
            </View>
          </View>
        </View>
    );
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
      marginTop: 30,
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
  