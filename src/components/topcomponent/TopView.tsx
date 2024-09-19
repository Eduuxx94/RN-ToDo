import React from 'react';
import { Dimensions, Image, StyleSheet, Text, View } from 'react-native';

export function TopView() {
    return (
        <View style={styles.topView}>
          {/* Component at the top of the boundary */}
          <Image
            style={styles.image}
            source={require('../../assets/rocket-png.png')}
          />
          <Text style={[styles.topContent, {color: '#7cbdff'}]}>to</Text>
          <Text style={[styles.topContent, {color: '#9e7de5'}]}>do</Text>
        </View>
    );
}

const screenHeight = Dimensions.get('window').height;
const styles = StyleSheet.create({
    topView: {
        height: screenHeight * 0.20, // 25% of the screen height
        backgroundColor: '#0d0d0d',
        alignItems: 'center', // Center horizontally
        justifyContent: 'center', // Center vertically
        flexDirection: 'row',
    },
    image: {
        width: 50, // Set the width to your desired size
        height: 50, // Set the height to your desired size
        resizeMode: 'contain', // Optional: ensures the image maintains its aspect ratio
    },
    topContent: {
        fontSize: 50,
        color: 'red',
        fontWeight: '800'
    },
});