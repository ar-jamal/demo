import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import JButton from '../src/Button';
// import {createDrawerNavigator} from '@react-navigation/drawer';
import {CustomIcon} from '../src/CustomIcon';
import GlobalStyles from '../src/GlobalStyles';


export default function ScreenA({navigation, route}) {
  
  const onPressHandler = () => {

    navigation.navigate('LoginScreen');
  };
  return (
    <View style={styles.body}>
      <Text style={[styles.text,GlobalStyles.CustomFont]}>This is the first page</Text>

       
        <JButton
          onPressFunction={onPressHandler}
          title={'Go to the login Page'}
        />
    
      <Text style={styles.text}> {route.params?.Message} </Text>
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
    },
})  