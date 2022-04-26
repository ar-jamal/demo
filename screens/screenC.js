import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
// import {createDrawerNavigator} from '@react-navigation/drawer';


export default function ScreenC({navigation}) {
  var onPressHandler = () => {
    navigation.navigate('Home');
  };
  return (
    <View style={styles.body}>
      <Text style={styles.text}>This is the 3rd & last page</Text>
      <Pressable
        onPress={onPressHandler}
        style={({pressed}) => [
          {backgroundColor: pressed ? 'blue' : 'yellow'},
          styles.PressButton,
        ]}>
        <Text style={styles.text}>Go to the Home Page</Text>
      </Pressable>
    </View>
  );
}


const styles = StyleSheet.create({
    container: {
      // padding: 40,
      flexDirection: 'row',
      backgroundColor: 'cyan',
      alignItems: 'center',
      justifyContent: 'space-between',
      margin: 10,
    },
  
    body: {
      flex: 1,
      backgroundColor: 'cyan',
      alignItems: 'center',
      justifyContent: 'center',
    },
    text: {
      fontWeight: 'bold',
      fontSize: 22,
      fontFamily: 'DancingScript-VariableFont_wght',
    },
})  

