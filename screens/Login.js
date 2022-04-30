import React, {useState} from 'react';
import {
  Pressable,
  StyleSheet,
  Text,
  View,
  Alert,
  Image,
} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import JButton from '../src/Button';
import GlobalStyles from '../src/GlobalStyles';
import AsyncStorage from '@react-native-async-storage/async-storage';
// import {createDrawerNavigator} from '@react-navigation/drawer';

export default function LoginScreen({navigation}) {
  // const {ItemName, ItemId} = route.params || {};
  /***********
    * States  
   //// useState hamesha react se export hota hai  is lye wahi se kia karo import {} me ok
  must read
  *******/
  const [name, setName] = useState('');

  const setData = async () => {
    if (name.length == 0) {
      Alert.alert('Message', 'please enter your Data');
    } else {
      try {
        await AsyncStorage.setItem('userName', name);
        navigation.navigate('Home');
      } catch (error) {
        console.log(error);
      }
    }
  };
  // const onPressHandler = () => {
  // navigation.navigate('Screen_C');
  // navigation.navigate('Home');
  // navigation.goBack();
  // navigation.setParams({ItemId: 13})
  // };
  return (
    <View style={styles.body}>
      <Image style={styles.logo} source={require('../assets/800.jpeg')} />

      <TextInput
        style={[GlobalStyles.input, {borderBottomLeftRadius: 0}]}
        placeholder="Enter your name"
        onChangeText={value => setName(value)}
      />

      <JButton onPressFunction={setData} title={'Login'} />
      <Text style={styles.text}>plz Login to Continue </Text>
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
    marginBottom: 30,
  },
});
