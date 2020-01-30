import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const BoxScreen = () => {
    return(
        <View style={styles.viewStyle}>
            <View style={styles.subscetionViewStyle}>
                <Text style={styles.text1Style}>Child #1</Text>
                <Text style={styles.text2Style}>Child #2</Text>
            </View>
            
            <Text style={styles.text3Style}>Child #3</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    viewStyle:{
        borderWidth: 3,
        borderColor: 'black',
        height: 200
    },
    subscetionViewStyle: {
        flexDirection: "row",
        justifyContent: "space-between"
    },
    text1Style: {
        borderWidth: 3,
        borderColor: 'red',
        backgroundColor: 'darksalmon'
    },
    text2Style: {
        borderWidth: 3,
        borderColor: 'mediumblue',
        backgroundColor: 'mediumpurple'
    },
    text3Style: {
        borderWidth: 3,
        borderColor: 'green',
        backgroundColor: 'greenyellow',
        alignSelf: 'center'
    }
});

export default BoxScreen;