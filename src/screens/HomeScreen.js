import React from 'react';
import { Text, StyleSheet, View, Button, TouchableOpacity } from 'react-native';

const HomeScreen = ({navigation}) => {
  return (
  <View style={styles.flexLayout}>
    <Text style={styles.text}>HomeScreen</Text>
    <Button
      title="Go to Componenets Demo"
      onPress={()=> navigation.navigate('Components')}
    />
    <Button
      title="Go to list view"
      onPress={() => navigation.navigate("List")} />
    <Button 
      title="Go to image screen"
      onPress={() => navigation.navigate("Image")}
    />
    <Button 
      title="Go to counter demo"
      onPress={() => navigation.navigate("Counter")}
    />
    <Button 
      title="Go to colour demo"
      onPress={() => navigation.navigate("Colour")}
    />
    <Button 
      title="Go to square demo"
      onPress={() => navigation.navigate("Square")}
    />
    <Button 
      title="Go to Text demo"
      onPress={() => navigation.navigate("Text")}
    />
  </View>
  );
};

const styles = StyleSheet.create({
  flexLayout : {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-evenly'
  },
  text: {
    fontSize: 30
  }
});

export default HomeScreen;
