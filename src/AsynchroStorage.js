import 'react-native-gesture-handler';
import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';

import ScreenA from '../screens/screenA';
import ScreenB from '../screens/screenB';
import ScreenC from '../screens/screenC';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Input"
      >
        <Stack.Screen
          name="Home"
          component={ScreenA}
          // options= {{tabBarBadge: 3}}
          //  options= {{ header: () => null}}
        />
        <Stack.Screen
          name="Input"
          component={InputScreen}
          // initialParams={{ItemName: 'Item from Drawer', ItemId: 9}}
        />
        <Stack.Screen name="Screen_C" component={ScreenC} />
      </Stack.Navigator>
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

  inputBar: {
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
