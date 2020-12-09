/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity
} from 'react-native';
import {
  Text,
  Container,
  Content,
  Header,
  Body,
  Card,
  H1,H3,
  Button,
  Title
} from 'native-base'
import Snackbar from 'react-native-snackbar'


import Icons from './components/Icons';

const itemArray=new Array(9).fill('empty')

const App=()=>{
  const [isCross,setIsCross]=useState(false)
  const [winMessage,serWinMessage]=useState('')

  const changeItem=(itemNumber)=>{

  }

  const reloadGame=()=>{

  }

  const checkIsWinner=()=>{

  }

  return(
    <Container style={{backgroundColor:"333945",paddingVertical:5}}>
      <Header>
        <Body>
          <Title>LCO TicTacToe</Title>
        </Body>
      </Header>
      <Content>
        <View style={styles.grid}>
          <Icons/>
        </View>
      </Content>      
    </Container>
  )
}

export default App;

const styles=StyleSheet.create({
  grid:{
    flex:1,
    flexDirection:'row',
    flexWrap:'wrap',
    marginTop:20
  },
  box:{
    width:"33%",
    marginBottom:6
  },
  card:{
    height:120,
    justifyContent:'center',
    alignItems:'center'
  },
  message:{
    textAlign:'center',
    textTransform:'uppercase',
    color:"#FFF",
    marginTop:20,
    backgroundColor:"#4652B3",
    paddingVertical:10
  }
})