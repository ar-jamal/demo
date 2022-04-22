import 'react-native-gesture-handler';
import JButton from './Button';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {createDrawerNavigator} from '@react-navigation/drawer';

import AntIcon from 'react-native-vector-icons/AntDesign';
import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import IconButton from 'react-native-vector-icons/dist/lib/icon-button';

// const Stack = createNativeStackNavigator();
// const Tab = createBottomTabNavigator ();
// const Tab = createMaterialBottomTabNavigator();
// const Tab = createMaterialTopTabNavigator();
const Drawer = createDrawerNavigator();

function ScreenA({navigation}) {
  // var  onPressHandlerHome= ({lastPage}) => {
  //   navigation.navigate('Home')
  //   lastPage = navigation.navigate('Screen_C')

  // var onPressHandlerHome = () => {
  //   navigation.navigate('Home');
  // };

  // var onPressHandlerLast = () => {
  //   navigation.navigate('Screen_C');
  // };
  const onPressHandler = () => {
    navigation.navigate('Screen_B');
  };
  return (
    <View style={styles.body}>
      <Text style={styles.text}>This is the first page</Text>
      <View style={styles.container}>
        {/* <Pressable   
          onPress= {onPressHandler}
          style= {({pressed}) => [
            { backgroundColor:  pressed? 'blue' :  'yellow' },styles.PressButton,
          ]}
        >
           <Text style= {styles.text}>
             Go to the Next Page
           </Text>
        </Pressable> */}

        <JButton
          onPressFunction={onPressHandlerLast}
          title={'Go to the Last page'}
        />
        <JButton
          onPressFunction={onPressHandler}
          // title = { <AntIcon name= { 'DoubleRightOutlined '} size= {12} color= {'white'} />} */}
          title={'next'}
          // iconName = {'bulb1'}
          // <AntIcon name={'bulb1'} size={12} color={'black'} />
        />
      </View>
    </View>
  );
}

function ScreenB({navigation}) {
  const onPressHandler = () => {
    navigation.navigate('Screen_C');
    // navigation.goBack();
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
    </View>
  );
}

function ScreenC({navigation}) {
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

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, size, color}) => {
            let iconName;
            if (route.name === 'Home') {
              iconName = 'home';
              size = focused ? 28 : 20;
              // color= focused ? 'black' : 'green';
            } else if (route.name === 'Screen_B') {
              iconName = 'bulb1';
              size = focused ? 28 : 20;
              // color= focused ? 'black' : 'green';
            } else {
              iconName = 'medicinebox';
              size = focused ? 28 : 20;
              // color= focused ? 'black' : 'green';
            }
            return <AntIcon name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          // activeTintColor:'black',
          // inactiveTintColor: 'yellow',
          // activeBackgroundColor: 'white',
          // inactiveBackgroundColor: 'blue',
          // showLabel: false,
          labelStyle: {fontSize: 14},
          // showIcon: true,
        }}
        activeColor="white"
        inactiveColor="red"
        // barStyle= {{backgroundcolor: 'cyan'}}
      >
        <Drawer.Screen
          name="Home"
          component={ScreenA}
          // options= {{tabBarBadge: 3}}
          //  options= {{ header: () => null}}
        />
        <Drawer.Screen name="Screen_B" component={ScreenB} />
        <Drawer.Screen name="Screen_C" component={ScreenC} />
      </Drawer.Navigator>
    </NavigationContainer>
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

  header: {
    flex: 1,
    backgroundColor: 'yellow',
    alignItems: 'center',
    justifyContent: 'center',
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
  PressButton: {
    // flex: 1,
    margin: 10,
  },
});
