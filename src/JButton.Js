
import React, {useState} from "react";
import { Button, Pressable, StyleSheet, Text } from "react-native";
const JButton = (props) => {
             return (
            <Pressable
              onPress={props.onPressFunction}
              // delayLongPress= {500}
              // hitSlop= {{top: 10, bottom: 10, right: 10, left: 10}}
              // disabled= {!submitted}
              android_ripple= {{color: 'orange'}}
              style= {({pressed}) => [
                {backgroundColor: pressed ? 'blue'  : '#00ff00' },
                {borderRadius: pressed ? 30  : null }, styles.submitBut
              ]}
              >
              <Text style= {styles.text}>
              {props.title}    
              </Text>
              </Pressable>
             )}
            
             export default JButton;

const styles = StyleSheet.create({

  submitBut: {
    // flex: .4,
    // backgroundColor: 'orange',
    // height: '100%',
    // aspectRatio: 2,
    // borderRadius: 30,
    // borderTopRightRadius: 30,
    // borderBottomRightRadius: 30,
    alignItems: 'center'
    justifyContent: 'center',
    margin: 5
  },

  text: {
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
    margin: 7,
    textTransform: 'capitalize',
    justifyContent: 'center',
    alignSelf: 'center'
  },


})             
