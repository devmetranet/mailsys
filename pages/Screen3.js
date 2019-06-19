//This is an example code for NavigationDrawer//
import React, { Component } from 'react';
//import react in our code.
import { StyleSheet, View, Text } from 'react-native';
// import all basic components

export default class Screen3 extends Component {
  //Screen3 Component
  render() {
    return (
      <View style={styles.boxContent}>
        <Text style={{ fontSize: 23 }}> Mail Sys adalah Platform untuk menyediakan penomoran, tata cara, dokumentasi segala surat masuk dan keluar </Text>
        <Text style={{ fontSize: 23, }}> Developed by Agung </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
   
    boxContent: {
        backgroundColor: '#FFF',
        padding: 20,
        flex:1
      },
    boxImages: {
        marginTop:20,
        marginBottom:20,
        textAlign: 'center',
        width: '100%'
    },
    logoStyle: {
        width: 135,
        height:40,
        marginLeft: 'auto',
        marginRight: 'auto'
      },    
});