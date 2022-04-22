import { Button, ColorPropType, StyleSheet, Text, View, openURL, ListViewComponent, ScrollView, RefreshControl, FlatList, SectionList, TextInput } from 'react-native';
import React, { useState } from 'react';

// const CText= ({text1}) => {
// return <Text style={styles.ChildText}>{text1= [
//   {'this is your mailbox'},
//   {'excelence your actions'}

// ]}</Text>

// }

// const Text1 = [
//   {
//     title: 'M',
//     data: ['your emails are here', 'Martin called you yesterday', 
//     'Max messeged you today', 'Merry called you on whatsapp']
//   },
//     {
//     title: 'N',
//     data: ['your emails are here', 'Martin called you yesterday', 
//     'Max messeged you today', 'Merry called you on whatsapp']
//      },
  
// ];
// 'a\n b\n c\n d\n e \n f\n g\n h\n i\n j\n k\n l\n m\n n\n o\n p\n q\n r\n s t, u, v, w, x, y, z'

//  d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z'

const DATA02 = [{key: '1', value: 'a'}, {key: '2', value: 'b'}, {key: '3', value: 'c'}];

            
  
const DATA = [
  {
    title: 'M',
    data: [{key: 'Mailbox', value: 'your emails are here'}, 
          {key: 'Martin', value: 'Martin called you yesterday '}, 
          {key:'Max', value: 'Max messeged you today'}, 
          {key: 'Merry', value: 'Merry called you on whatsapp'}]
  },
  {
    title: 'N',
    data: [{key: 'Naila', value: 'for man is man and Master of fate'}, 
          {key: 'Norland', value: 'Never say no'}, 
          {key:'Nick', value: 'Better late than never'}, 
          {key: 'Nancy', value: 'Bad times make a good man'}]
  },
];

const App02 = () => {

  return (
    <View style={styles.Bk}>

      <View style={styles.Header}>
      </View>
      <View style={styles.Header}>
        <Text style={styles.Heading}> Contact </Text>
        <TextInput style={styles.input}
          placeholder='Search for contacts' />
      </View>


      <View style={styles.item}>

        <SectionList
          // numColumns={3}
          // keyExtractor={(item, index) => index.toString()}
          // horizontal
          // inverted
         
          sections={DATA}          
          renderItem={({ item }) => (
            <View style={styles.item}>
              <View style={styles.inItem}></View>
              <View style={styles.titleDetails}>
              {/* <View style={styles.textFormat}> */}
              <Text style={styles.text}>{item.key}</Text> 
              <Text style={styles.childText}>{item.value}</Text> 
              </View>     
              {/* <CText Text1={item} />
            </View> */}
            </View>            
          )}
          renderSectionHeader={({ section }) => (<View style={styles.titleText}>
            <Text style={styles.titleText}>{section.title}</Text></View>
          )}
          
          />
          
        
        
        
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
    // height: '15%',
    width: '90%',
    alignSelf: 'flex-end',
    alignItems: 'flex-start',
    borderRadius: 20,
    // justifyContent: 'flex-end',
  },

  Header: {
    // backgroundColor: 'green',
    flexDirection: 'column',
    // flex: 1,
    height: '15%',
    // width: '80%',    
    alignItems: 'flex-start',
    // justifyContent: 'flex-end',
  },

  item: {
    flexDirection: 'row',
    flex: 1,
    // height: '100%',
    // backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'flex-start',
    margin: 10,
  },

  inItem: {
    //  flex: 1,
    height: 46,
    width: 46,
    borderRadius: 23,
    backgroundColor: '#6886ff',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    margin: 6,
  },

  titleDetails: {
    flexDirection: 'column',
    flex: 1,
    // backgroundColor: 'yellow',
    // height: '100%',
    // backgroundColor: 'yellow',
    alignItems: 'flex-start',
    justifyContent: 'space-evenly',
    margin: 3,
  },

  input: {
    // borderWidth: 5,
    backgroundColor: '#F2F2F2',
    borderRadius: 25,
    width: 325,
    height: 30,
    fontSize: 9,
    textAlign: 'center',
    // justifyContent: 'center',
    // borderColor: 'blue',

    alignItems: 'center'
  },

  Heading: {
    color: 'black',
    fontSize: 30,
    fontWeight: 'bold',
    // fontStyle: 'italic',
    // justifyContent: 'center',
    // textAlign: 'center',
    textTransform: 'capitalize',
    // textDecorationColor: 'blue', 
    // margin: 7,
  },

  titleText: {
    color: 'black',
    fontSize: 18,    
  },

  childText: {
    color: '#c0c0c0',
    fontSize: 12,    
  },

  text: {
    color: 'black',
    fontSize: 18,
    fontWeight: 'bold',
    // fontStyle: 'italic',
    // justifyContent: 'center',
    // textAlign: 'center',
    textTransform: 'capitalize',
    // textDecorationColor: 'blue', 
    // margin: 7,
  }

});