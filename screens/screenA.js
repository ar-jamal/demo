import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import JButton from '../src/Button';
// import {createDrawerNavigator} from '@react-navigation/drawer';
import {CustomIcon} from '../src/CustomIcon';
import GlobalStyles from '../src/GlobalStyles';


export default function ScreenA({navigation, route}) {
  // var  onPressHandlerHome= ({lastPage}) => {
  //   navigation.navigate('Home')
  //   lastPage = navigation.navigate('Screen_C')

  // var onPressHandlerHome = () => {
  //   navigation.navigate('Home');
  // };

  var onPressHandlerLast = () => {
    navigation.navigate('Screen_C');
    // navigation.toggleDrawer();
  };
  const onPressHandler = () => {
    navigation.navigate('Screen_B');
    // navigation.navigate('Screen_B', {
    //   ItemName: 'Item from Screen A',
    //   ItemId: 9,
    // });
    //  navigation.closeDrawer();
    //  navigation.toggleDrawer();
  };
  return (
    <View style={styles.body}>
      <Text style={[styles.text,GlobalStyles.CustomFont]}>This is the first page</Text>
      <View style={styles.container}>
        {/* <Pressable   
          onPress= {onPressHandler}
          style= {({pressed}) => [
            { backgroundColor:  pressed? 'blue' :  'yellow' },styles.PressButton,
          ]}s
        >
           <Text style= {styles.text}>
             Go to the Next Page
           </Text>
        </Pressable> */}

        <JButton
          onPressFunction={onPressHandlerLast}
          title={'Go to the last page'}
          // title={'Open Drawer'}
        />
        <CustomIcon name="home" size={24} />
        <JButton
          onPressFunction={onPressHandler}
          // title = { <AntIcon name= { 'DoubleRightOutlined '} size= {12} color= {'white'} />} */}
          title={'next'}
          // title={'Toggle Drawer'}
          // iconName = {'bulb1'}
          // <AntIcon name={'bulb1'} size={12} color={'black'} />
        />
      </View>
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