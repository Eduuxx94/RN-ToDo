import React, { useState } from 'react';
import { View, StyleSheet, Dimensions, Text, Image, TextInput, TouchableHighlight, TouchableOpacity } from 'react-native';

export function App() {
    const [selected, setSelected] = useState(null); // Keep track of the selected option

  const handlePress = (value: any) => {
    setSelected(value); // Update selected radio button
  };
    return (
        <View style={styles.container}>
      <View style={styles.topView}>
        {/* Component at the top of the boundary */}
        <Image style={styles.image} source={require('./assets/rocket-png.png')} />
        <Text style={[styles.topContent, {color: "#7cbdff"}]}>to</Text>
        <Text style={[styles.topContent, {color: "#9e7de5"}]}>do</Text>
      </View>
      
      <View style={styles.bottomView}>
        {/* Component at the bottom of the boundary */}
        <View style={styles.row}>
            <Text style={[styles.titleText, {color: "#3f9eff"}]}>Criadas <View style={[styles.dialogCounter]}><Text style={styles.normalText}>1</Text></View></Text>
            <Text style={[styles.titleText, {color: "#9e7de5"}]}>Concluídas <View style={[styles.dialogCounter]}><Text style={styles.normalText}>1</Text></View></Text>
        </View>
        <View style={styles.collumn}>
            <View style={styles.dialogBox}>
                <View style={styles.row}>
                    <TouchableOpacity 
                        style={styles.radioButton} 
                        onPress={() => handlePress('Option 2')}>
                        <View style={selected === 'Option 2' ? styles.radioButtonSelected : styles.radioButtonUnselected} />
                    </TouchableOpacity>
                    <Text style={styles.normalText}>sdfsdfs sdfs d</Text>
                    <Image style={[styles.image, {width:30, height: 30, marginRight:10}]} source={require('./assets/delete.png')} />
                </View>
            </View>

        </View>
      </View>



      <View style={[styles.middleComponent]}>
        <TextInput style={styles.textInput}>Middle Component</TextInput>
        <TouchableHighlight style={styles.button} underlayColor="#3f9eff" onPress={() => {  }}>
            <Text style={styles.buttonText}>+</Text>
        </TouchableHighlight>
      </View>
      
      {/* Component at the middle of the boundary */}
    </View>
  );
}


const screenHeight = Dimensions.get('window').height;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  topView: {
    height: screenHeight * 0.20, // 25% of the screen height
    backgroundColor: '#0d0d0d',
    alignItems: 'center', // Center horizontally
    justifyContent: 'center', // Center vertically
    flexDirection: 'row',
  },
  bottomView : {
    flex: 1, // remaining space
    backgroundColor: '#202020',
    paddingVertical: 50,
    paddingHorizontal: 20,
  },
  middleComponent: {
    position: 'absolute',
    top: screenHeight * 0.20 - 25, // Half the component height above the boundary
    left: 0,
    right: 0,
    alignItems: 'center',
    justifyContent: 'center',
    height: 50, // Height of the middle component
    backgroundColor: 'transparent', // Transparent background so it shows both gray and white behind it
    flexDirection: 'row',
  },
  topContent: {
    fontSize: 50,
    color: 'red',
    fontWeight: '800'
  },
  text: {
    fontSize: 16,
    color: 'black',
    backgroundColor: 'lightblue', // Optional background for the text itself
    padding: 10,
    borderRadius: 5,
  },
  textInput: {
    fontSize: 16,
    color: '#979797',
    backgroundColor: '#353535', // Optional background for the text itself
    padding: 10,
    borderRadius: 5,
    width: 250,
    height: 50,
  },
  image: {
    width: 50, // Set the width to your desired size
    height: 50, // Set the height to your desired size
    resizeMode: 'contain', // Optional: ensures the image maintains its aspect ratio
  },
  button: {
    width: 50,
    height: 50,
    backgroundColor: '#6ab4ff',
    borderRadius: 6, // To make it round
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
  },
  buttonText: {
    fontSize: 35,
    color: 'white',
    fontWeight: '600'
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
  deleteButton: {
    color: 'red',
    width: '10%',
    margin: 10,
  }
});
