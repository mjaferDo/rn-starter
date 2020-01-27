import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const ListScreen = () => {
    const friends = [
        {name: 'Firend #1', age: 30},
        {name: 'Firend #2', age: 32},
        {name: 'Firend #3', age: 40},
        {name: 'Firend #4', age: 37},
        {name: 'Firend #5', age: 28},
        {name: 'Firend #6', age: 45},
        {name: 'Firend #7', age: 37},
        {name: 'Firend #8', age: 39},
        {name: 'Firend #9', age: 30}
    ];

    return (
    <FlatList
      keyExtractor={(friend) => friend.name}
      data={friends}
      renderItem={({ item }) => {
        return <Text style={styles.textStyle}>{item.name} {item.age}</Text>;
    }}
    />
    );
};

const styles = StyleSheet.create({
    textStyle: {
        marginVertical: 50
    }
});

export default ListScreen;