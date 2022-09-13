import React, { useState } from 'react';
import { SafeAreaView, StyleSheet,Text, View ,Image,TouchableOpacity,TextInput} from 'react-native';
import {useRoute} from '@react-navigation/native';
import { colors } from '../utils/Variables';

const DetailScreen = (props) => {
  const {params} = useRoute();
  return (
    <SafeAreaView >
      <Image
          style={styles.img}
          source={{uri: params.item.image_url}}
        />
     <Text>{params.item.name}</Text>
     <Text>{params.item.rating}</Text>
     <Text>{params.item.phone}</Text>
     
    </SafeAreaView>
  );
};

export default DetailScreen;

const styles = StyleSheet.create({
container:{
    flex:1
},
img:{
  height: 120, width: 250,
   resizeMode:'cover',
   marginTop:10,
   marginLeft:10
   
},
title: {
  color:colors.black,
  fontSize: 22,
  fontWeight: '600',
  
},
row: {
  flexDirection: 'row',
  alignItems: 'center',
  margin: 10,
},
center:{
  alignSelf:'center'
}
})