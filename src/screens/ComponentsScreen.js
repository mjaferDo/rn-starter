import React from 'react';
import { Text, StyleSheet, View } from "react-native";

const ComponentsScreen = () => {
    const name = 'Mudassar Jafer';
    const intro = <Text style={styles.subHeadingStyle}>My name is {name}</Text>;
    return (
    <View>
        <Text style={styles.textStyle}>Getting started with React Native!</Text>
        {intro}
    </View>
    );
};

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 45
    },
    subHeadingStyle: {
        fontSize: 20
    }
});

export default ComponentsScreen;