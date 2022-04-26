import 'react-native-gesture-handler';
import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';

import ScreenA from '../screens/screenA';
import ScreenB from '../screens/screenB';
import ScreenC from '../screens/screenC';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {createDrawerNavigator} from '@react-navigation/drawer';

import AntIcon from 'react-native-vector-icons/AntDesign';
import IconButton from 'react-native-vector-icons/dist/lib/icon-button';
// import {CustomIcon} from './CustomIcon';

// const Stack = createNativeStackNavigator();
// const Tab = createBottomTabNavigator ();
// const Tab = createMaterialBottomTabNavigator();
// const Tab = createMaterialTopTabNavigator();
const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="Home"
        defaultStatus="close"
        drawerPosition="right"
        edgeWidth={500}
        hideStatusBar={true}
        overLayColor="black"
        drawerStyle={{backgroundColor: 'yellow'}}
        screenOptions={{
          // headerShown: false,
          swipeEnabled: true,
          gestureEnabled: false,
          headerTitleAlign: 'center',
          headerTintColor: 'white',
          headerStyle: {
            backgroundColor: 'blue',
          },
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 25,
          },
        }}
        // screenOptions={({route}) => ({
        //   tabBarIcon: ({focused, size, color}) => {
        //     let iconName;
        //     if (route.name === 'Home') {
        //       iconName = 'home';
        //       size = focused ? 28 : 20;
        //       // color= focused ? 'black' : 'green';
        //     } else if (route.name === 'Screen_B') {
        //       iconName = 'bulb1';
        //       size = focused ? 28 : 20;
        //       // color= focused ? 'black' : 'green';
        //     } else {
        //       iconName = 'medicinebox';
        //       size = focused ? 28 : 20;
        //       // color= focused ? 'black' : 'green';
        //     }
        //     return <AntIcon name={iconName} size={size} color={color} />;
        //   },
        // })}
        // tabBarOptions={{
        // activeTintColor:'black',
        // inactiveTintColor: 'yellow',
        // activeBackgroundColor: 'white',
        // inactiveBackgroundColor: 'blue',
        // showLabel: false,
        // labelStyle: {fontSize: 14},
        // showIcon: true,
        // }}
        // activeColor="white"
        // inactiveColor="red"
        // barStyle= {{backgroundcolor: 'cyan'}}
        // defaultStatus='transparent'
      >
        <Drawer.Screen
          name="Home"
          component={ScreenA}
          // options= {{tabBarBadge: 3}}
          //  options= {{ header: () => null}}
        />
        <Drawer.Screen
          name="Screen_B"
          component={ScreenB}
          initialParams={{ItemName: 'Item from Drawer', ItemId: 9}}
        />
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
