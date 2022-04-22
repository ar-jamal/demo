import 'react-native-gesture-handler';
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect, useState} from 'react';
// import {
//   SafeAreaView,
//   ScrollView,
//   StatusBar,
//   StyleSheet,
//   Text,
//   useColorScheme,
//   View,
// } from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import AndroidHorizontalScrollContentViewNativeComponent from 'react-native/Libraries/Components/ScrollView/AndroidHorizontalScrollContentViewNativeComponent';

// const App = () => {
//   const isDarkMode = useColorScheme() === 'dark';

//   const backgroundStyle = {
//     backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
//   };
// import React from 'react';

import {SafeAreaView, Text, View, StyleSheet} from 'react-native';
import App02 from './src/App02';
// import App from './src/NavigationExercise';

// import App-03 from './App-03';

const App = () => {
  // return <App>
  // return (
  //   <SafeAreaView style={{flex: 1}}>
  //     <View
  //       style={{
  //         justifyContent: 'center',
  //         alignItems: 'center',
  //         flex: 1,
  //         backgroundColor:'yellow'
  //       }}>
  //       {/*Use of our custom component MyCustomTextWith*/}
  //       {/* <MyCustomTextWith
  //         firstname="fName1"
  //         secondname="lname1"
  //       /> */}
  //       {/*We are setting the props dynamically from the main UI
  //          where we want to use it. We candynamically set the value
  //          using props from master every time*/}
  //       {/* <MyCustomTextWith
  //         firstname="fName2"
  //         secondname="lname2"
  //       /> */}
  //       <App02/>
  //     </View>
  //   </SafeAreaView>
  // );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});
export default App;
