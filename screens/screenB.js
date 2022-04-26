import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
// import JButton from '../src/Button;'
// import {createDrawerNavigator} from '@react-navigation/drawer';


export default function ScreenB({navigation, route}) {
    const {ItemName, ItemId} = route.params || {};
    const onPressHandler = () => {
      // navigation.navigate('Screen_C');
      navigation.navigate('Home', {Message: 'Message sent from Screen B'});
      // navigation.goBack();
      // navigation.setParams({ItemId: 13})
    };
    return (
      <View style={styles.body}>
        <Text style={styles.text}>This is the 2nd page</Text>
        <Pressable
          onPress={onPressHandler}
          style={({pressed}) => [
            {backgroundColor: pressed ? 'blue' : 'yellow'},
            styles.PressButton,
          ]}>
          <Text style={styles.text}>Go to the Next Page</Text>
        </Pressable>
        <Text style={styles.text}> {ItemName} </Text>
        <Text style={styles.text}> ID: {ItemId} </Text>
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