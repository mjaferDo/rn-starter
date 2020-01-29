import React, { useReducer } from 'react';
import {Text, View, StyleSheet, Button } from 'react-native';

const INCREMENT = 'increment';
const DECREMENT = 'decrement';

const reducer = (state, action) => {
    // state === { count: number }
    // action === { type: 'change_increment' || 'change_decrement', payload: 1}
    switch(action.type){
        case INCREMENT:
            return { ...state, count: state.count + action.payload };
        case DECREMENT:
            return { ...state, count: state.count - action.payload };
        default:
            return state;
    }
};

const CounterScreen = () => {
    const [state, dispatch] = useReducer(reducer, { count: 0 });

    return (
    <View style={styles.flexLayout}>
        <Button 
            title="Increase"
            onPress={() => {
                dispatch({type: INCREMENT, payload: 1})
        }}/>
        <Button 
            title="Decrease"
            onPress={() => {
            dispatch({type: DECREMENT, payload: 1})
        }}/>
        <Text>Current count: {state.count}</Text>
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