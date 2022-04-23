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
import { CustomIcon } from './CustomIcon';

// const Stack = createNativeStackNavigator();
// const Tab = createBottomTabNavigator ();
// const Tab = createMaterialBottomTabNavigator();
// const Tab = createMaterialTopTabNavigator();
const Drawer = createDrawerNavigator();

function ScreenA({navigation, route}) {
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
    navigation.navigate('Screen_B')
    // navigation.navigate('Screen_B', {
    //   ItemName: 'Item from Screen A',
    //   ItemId: 9,
    // });
    //  navigation.closeDrawer();
    //  navigation.toggleDrawer();
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
          // title={'Open Drawer'}
        />
        <CustomIcon name='home' size={24} />
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

function ScreenB({navigation, route}) {
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
