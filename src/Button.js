import React, {useState} from 'react';
import {Button, Pressable, StyleSheet, Text} from 'react-native';
import AntIcon from 'react-native-vector-icons/AntDesign';

const JButton = props => {
  return (
    <Pressable
      onPress={props.onPressFunction}
      // delayLongPress= {500}
      // hitSlop= {{top: 10, bottom: 10, right: 10, left: 10}}
      // disabled= {!submitted}
      // android_ripple= {{color: 'orange'}}

      style={({pressed}) => [
        {backgroundColor: pressed ? 'blue' : '#00ff00'},
        {borderRadius: pressed ? 30 : null},
        styles.submitBut,
      ]}>
      <Text style={styles.text}>{props.title}</Text> 

      {/* <AntIcon name={props.iconName} size={props.iconSize} color={props.iconColor} /> */}

    </Pressable>
  );
};

export default JButton;

const styles = StyleSheet.create({
  submitBut: {
    // flex: .4,
    // backgroundColor: 'orange',
    height: 40,
    aspectRatio: 4.2,
    // borderRadius: 30,
    // borderTopRightRadius: 30,
    // borderBottomRightRadius: 30,
    // alignItems: 'center'
    justifyContent: 'center',
    margin: 10
  },

  text: {
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
    margin: 7,
    textTransform: 'capitalize',
    justifyContent: 'center',
    alignSelf: 'center',
  },
});
