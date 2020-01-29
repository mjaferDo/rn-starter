import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

const TextScreen = () => {
    const [ password, setPassword ] = useState('');

    return (
        <View>
            <Text>Enter Password: </Text>
            <TextInput style={styles.input} 
                autoCapitalize="none"
                autoCorrect={false}
                value={password} 
                onChangeText={(newValue) => setPassword(newValue)}
                />
                {password.length > 4 ? null : <Text>Password should be longer than 5 characters</Text>}
        </View>
    );
};

const styles = StyleSheet.create({
    input: {
        margin: 15,
        borderColor: 'black',
        borderWidth: 1
    }
});

export default TextScreen;