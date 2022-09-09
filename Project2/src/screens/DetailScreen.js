import React, { useState } from 'react';
import { SafeAreaView, StyleSheet,Text, View ,Image,TouchableOpacity,TextInput} from 'react-native';
import {useRoute} from '@react-navigation/native';

const DetailScreen = (props) => {
  const {params} = useRoute();
  return (
    <SafeAreaView style={styles.container}>
     <View style={styles.center}> 
       <Image style={styles.img} source={params.item.img} />
       <View style={styles.row}>
        <Text  style={styles.title}>Name:</Text>
        <Text style={styles.title}> {params.item.title}</Text>
       </View>
       <View style={styles.row}>
        <Text  style={styles.title}>Price:</Text>
        <Text style={styles.title}> {params.item.price}</Text>
       </View>
      
     </View>
    </SafeAreaView>
  );
};

export default DetailScreen;

const styles = StyleSheet.create({
container:{
    flex:1
},
img: {
  resizeMode: 'contain',
  height: 100,
  width: 100,
  borderRadius: 25,
  alignSelf:'center'
},
title: {
  color: 'black',
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