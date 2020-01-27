import React, { useState } from 'react';
import {Text, View, StyleSheet, Button } from 'react-native';

const CounterScreen = () => {
    const [counter, setCounter] = useState(0);

    return (
    <View style={styles.flexLayout}>
        <Button 
            title="Increase"
            onPress={() => {
            setCounter(counter + 1)
        }}/>
        <Button 
            title="Decrease"
            onPress={() => {
            setCounter(counter - 1)
        }}/>
        <Text>Current count: {counter}</Text>
    </View>
    );
}

const styles = StyleSheet.create({
    flexLayout : {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-evenly'
    }
});

export default CounterScreen;