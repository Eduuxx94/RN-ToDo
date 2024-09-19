import React from 'react';
import { Dimensions, StyleSheet, Text, TextInput, TouchableHighlight, View } from 'react-native';

export function MiddleView() {
    return (
        <View style={[styles.middleComponent]}>
          <TextInput style={styles.textInput}>Middle Component</TextInput>
          <TouchableHighlight
            style={styles.button}
            underlayColor="#3f9eff"
            onPress={() => {}}>
            <Text style={styles.buttonText}>+</Text>
          </TouchableHighlight>
        </View>
    );
}

const screenHeight = Dimensions.get('window').height;
const styles = StyleSheet.create({
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
    textInput: {
        fontSize: 16,
        color: '#979797',
        backgroundColor: '#353535', // Optional background for the text itself
        padding: 10,
        borderRadius: 5,
        width: 250,
        height: 50,
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
});