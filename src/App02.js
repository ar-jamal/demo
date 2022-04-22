import { Button, ColorPropType, StyleSheet, Text, View, openURL, ListViewComponent, ScrllView, RefreshControl, FlatList, SectionList, TextInput, Touchable, TouchableOpacity,Pressable, Alert,ToastAlerlt, ToastAndroid, Modal, Image } from 'react-native';
import React, { useState } from 'react';
import JButton from './Button';




const App02 = () => {

  const [inputText, setInputText] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [showWarning, setShowWarning] = useState(false);
  const OnpressHandler = () => {
    if (inputText.length > 0) {
      setSubmitted(!submitted);
    //   <JButton
    //  style= { ({submitted}) => {
    //    submitted ? {borderRadius: 30} : null
    //  }}
    //  />

    }
    else{
      // setShowWarning(true);
      setSubmitted(false);
      


      // Alert.alert('Warning', 'Atleast write something to be printed', [
      //   {text: 'Quit', onPress: () => console.warn('Try next time')},
      //   {text: 'Cancel', onPress: () => console.warn('Try again')},
      //   {text: 'Ok', onPress: () => console.warn('Good')},
      // ],
      //  {cancelable: true, onDismiss: console.warn('Alert dismissed')})
      
      // ToastAndroid.showWithGravityAndOffset(
      //   'Atleast write something to be printed', 
      //   ToastAndroid.LONG,
      //   ToastAndroid.TOP,0,15
      // )
    }
  };
  return (
    
    <View style={styles.Bk}>
     <Modal 
     hardwareAccelerated
     animationType='fade'
     transparent
     visible= {showWarning}
     onRequestClose= {()=> 
      setShowWarning(false)
     }
     >
       <View style= {styles.warningBk}>
         <View style= {styles.warning}>
         <Text style= {styles.text}>
         Atleast write something to be printed
         </Text>  
         </View>
       </View>
     </Modal>
 
 <View style={styles.header}>
          <View style={styles.profile}>
            <View style={styles.proPic}>
              </View>
          </View>
        <View style={styles.subHeader}>
       
            <Text style={styles.Heading}> Martin </Text>
            
            <View style={styles.itemHeader}>             
          <Image 
          style= {styles.image02}
          source= {require('../assets/call.png')}
          resizeMode= 'stretch'/>
            </View>
        
        </View>
 </View>

  <View style={styles.sidebar}>
      <View style={styles.subSidebar}>
    
        <View style={styles.item}></View>
        <View style={styles.item}></View>
        <View style={styles.item}></View>
        <View style={styles.item}></View>
        <View style={styles.item}></View>
      </View>

    <View style={styles.subSidebar02}>

        <View style={styles.chat}>

            <View style={styles.chatYou}>
            <Text style={styles.ChildTextYou}> how are you dude??  </Text>
            </View> 
            <View style={styles.chatHe}>
            <Text style={styles.ChildTextHe}> I'm fine how about you?? </Text>
            </View>      

            <View style={styles.submitText}>
            {submitted ? 
            <View style={styles.submitFlex}>
                 <Image 
            style={styles.image}
            source={require('../assets/ok.png')}
            resizeMode= 'stretch'
            />
           <Text style= {styles.ChildTextYou}> you are registered as {inputText}</Text>
           </View>
               : 
               <Image 
            style={styles.image}
        source={require('../assets/alert.png')}
          resizeMode= 'stretch'
            />   
             }
              </View>      
            
        </View>
        

        <View style={styles.textAdmin}>

               <Text style= {styles.ChildTextHe}> Search text is here => {inputText}</Text>
               <JButton
               onPressFunction= {OnpressHandler}
               title= {submitted ? 'Clear' : 'Submit'}
               text= {{color: 'white'}}
              //  style= {{borderRadius: 30}}
              //  style= {{margin: 12}}
               />
              {/* <Pressable
              onPress={OnpressHandler}
              // delayLongPress= {500}
              // hitSlop= {{top: 10, bottom: 10, right: 10, left: 10}}
              // disabled= {!submitted}
              android_ripple= {{color: 'orange'}}
              style= {({pressed}) => [
                {backgroundColor: pressed ? 'blue'  : '#00ff00' },{borderRadius: pressed ? 30  : null }, styles.submitBut
              ]}
              >
              <Text style= {styles.text}>
              {submitted ? 'clear' : 'submit'}    
              </Text>
              </Pressable >  */}
                                           
            </View>
            

        <View style={styles.footer}>

          <TextInput style={styles.input}
          // keyboardType= 'numeric'
          defaultValue
          multiline
          placeholder='Type your name here'
          onChangeText={(value) => setInputText(value)}
          // secureTextEntry
          // maxLength= {2}
          // editable= {false}
          />
          <View style={styles.subFooter}>
          </View>
          </View>
          
          
        
    </View>

  </View>
        </View>
  )
};


export default App02;

const styles = StyleSheet.create({
  Bk: {
    // backgroundColor: 'orange',
    flexDirection: 'column',
    flex: 1,
    justifyContent: 'space-around',
    bordercolor: 'green',
    borderRadius: 10,
    
    // justifyContent: 'flex-end',
  },
  
  header: {
    flex: 2,
    flexDirection: 'row',
    // Width: '100%',
    backgroundColor: '#f2f4ff',
    // borderRadius: 25,
    fontSize: 9,
    textAlign: 'center',
    justifyContent: 'space-between',
    // borderColor: 'blue',
    alignItems: 'center'
  },

  profile: {
    flex: 2,
    height: '100%',
    backgroundColor: '#6886ff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  proPic: {
    height: 42,
    width: 42,
    borderWidth: 3,
    borderColor: 'white',
    backgroundColor: 'yellow',
    borderRadius: 21,
    // margin: 10,
  },

  subHeader: {
    flex: 10,
    flexDirection: 'row',
    backgroundColor: '#f2f4ff',
    height: '100%',
    justifyContent: 'space-between',
    // borderColor: 'blue',
    alignItems: 'center'
  },
  
  itemHeader: {
    height: 37,
    aspectRatio: 1,
    backgroundColor: 'red',
    borderWidth: 3,
    borderColor: '#bed5ff',
    borderRadius: 37,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 15,
    overflow: 'hidden',
    elevation: 4,
  },

  image02: {
    height: 34,
    aspectRatio: 1,
    // borderWidth: 3,
    // borderColor: 'white',
    borderRadius: 30,
    // backgroundColor: '#7697f9',
    // margin: 15,
  },
  
  sidebar: {
    // backgroundColor: '#6886ff',
    flexDirection: 'row',
    flex: 13,
    // height: '15%',
    // width: '80%',    
    // alignItems: 'center',
    justifyContent: 'flex-start',
  },

  subSidebar: {
    flex: 2,
    flexDirection: 'column',
    backgroundColor: '#6886ff',
    alignItems: 'center',
    justifyContent: 'flex-start',
    // margin: 10,
  },

  subSidebar02: {
    flex: 10,
    backgroundColor: 'white',
    flexDirection: 'column',
    // height: '15%',
    // width: '80%',    
    // alignItems: 'center',
    justifyContent: 'flex-start',
  },
  
  item: {
    height: 32,
    width: 32,
    backgroundColor: '#526fee',
    alignItems: 'center',
    // borderWidth: 18,
    borderColor: '#6886ff',
    borderRadius: 8,
    justifyContent: 'flex-start',
    margin: 16,
  },


  chat: {
    flexDirection: 'column',
    flex: 12,
    // borderWidth: 5,
    backgroundColor: 'white',
    // borderRadius: 25,
    // textAlign: 'center',
    alignItems: 'flex-start',
    margin: 12,
    // justifyContent: 'space-around', 

  },

  chatYou: {
    flexDirection: 'row',
    borderWidth: 5,
    borderColor: 'white',
    backgroundColor: '#f2f4ff',
    borderRadius: 30,
    // fontSize: 9,
    // textAlign: 'center',
    justifyContent: 'flex-start',
    
    // alignItems: 'center'
  },

  chatHe: {
    flexDirection: 'row',
    borderWidth: 5,
    borderColor: 'white',
    backgroundColor: 'blue',
    borderRadius: 30,
    fontSize: 9,
    textAlign: 'center',
    // justifyContent: 'flex-end',
    alignSelf: 'flex-end'
    // alignItems: 'center'
  },

  textAdmin: {
    flex: 1,
    flexDirection: 'row',    
    backgroundColor: 'cyan',
    alignSelf: 'center',
    alignItems: 'center',
    borderRadius: 300,
    margin: 9,
    justifyContent: 'space-around'
  },

  // buttonView: {
  //   flex: 1,
  //   // flexDirection: 'row',    
  //   // backgroundColor: 'cyan',
  //   // alignSelf: 'center',
  //   // alignItems: 'center',
  //   borderRadius: 300,
  //   // margin: 9,
  //   justifyContent: 'center'
  // },

  searchText: {
    color: 'white',
    flex: 3,
    fontSize: 13,
    margin: 7,
    textTransform: 'capitalize',
    justifyContent: 'center'
  },

  submitBut: {
    // flex: .4,
    // backgroundColor: 'orange',
    height: '100%',
    aspectRatio: 2,
    // borderRadius: 30,
    borderTopRightRadius: 30,
    borderBottomRightRadius: 30,
    // alignItems: 'center'
    justifyContent: 'center',
    // margin: 5
  },

  footer: {
    flex: 1,
    flexDirection: 'row',
    // backgroundColor: 'yellow',
    alignSelf: 'center',
    alignItems: 'center',
    margin: 9,
    justifyContent: 'space-evenly'
  },
  
  input: {
    flex: 9,
    // borderWidth: 5, 
    backgroundColor: '#F2F2F2',
    borderRadius: 15,
    height: 30,
    margin: 8,
    fontSize: 9,
    textAlign: 'center',
    // justifyContent: 'center',
    borderWidth: 3,
    borderColor: '#F6F4F9',
    alignItems: 'center'
  },

  subFooter: {
    // flex: 1,
    width: 30,
    height: 30,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: '#F2F2F2', 
    backgroundColor: 'white',    
    alignItems: 'center'
  },

  submitText: {
    flexDirection: 'column', 
    height: 200,
    aspectRatio: 1,
    // flex: 3,
    // alignSelf: 'flex-end',
    
    alignItems: 'center',
    justifyContent: 'flex-end',

  },

  Heading: {
    color: 'black',
    backgroundColor: '#f2f4ff',
    fontSize: 30,
    fontWeight: 'bold',
    textTransform: 'capitalize',
    margin: 20,
  },

  titleText: {
    color: 'black',
    fontSize: 18,    
  },

  ChildTextYou: {
    color: 'black',
    fontSize: 13,
    margin: 7,    
  },

  ChildTextHe: {
    color: 'white',
    fontSize: 13, 
    margin: 7,   
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

  warningBk: {
    flex: 1,
    backgroundColor: '#00000099',
    // backgroundColor: '#ffff0056',
    justifyContent: 'center',
    alignItems: 'flex-end',
    // alignSelf: 'center'
  },

  warning: {
    backgroundColor: 'white',
    // color: '#ffff',
    height: 100,
    aspectRatio: 3,
    // borderRadius: 50,
    // opacity: 800,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 20,
  },
  
  image: {
    // color: 'black',
    // backgroundColor: '#f2f4ff',
    height: 150,
    aspectRatio: 1,
    // margin: 20,
  },

  

});



