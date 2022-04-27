import React from 'react';
import {Pressable, StyleSheet, InputText, Text, View, Image} from 'react-native';
import JButton from '../src/Button';
// import {createDrawerNavigator} from '@react-navigation/drawer';


export default function LoginScreen({navigation}) {
    // const {ItemName, ItemId} = route.params || {};
    const onPressHandler = () => {
      // navigation.navigate('Screen_C');
      navigation.navigate('Home');
      // navigation.goBack();
      // navigation.setParams({ItemId: 13})
    };
    return (
      <View style={styles.body}>
      <Image
        style= {styles.logo}
        source= {require('../assets/800.jpeg')}
      />
        <Text style={styles.text}>plz Login to Continue </Text>

        <JButton
          onPressFunction={onPressHandler}
          title={'Login'}
        />
    
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
      marginTop: 100,
      flex: 1,
      // backgroundColor: 'cyan',
      alignItems: 'center',
      // justifyContent: 'space-between',
    },
    text: {
      fontWeight: 'bold',
      fontSize: 17,
      fontFamily: 'DancingScript-VariableFont_wght',
    },
    logo: {
      height: 80,
      aspectRatio: 2,
      margin: 10,
    }
})  