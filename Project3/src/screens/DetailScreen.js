import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import {useRoute} from '@react-navigation/native';
import {colors, fontSizes} from '../utils/Variables';

const DetailScreen = () => {
  const {params} = useRoute();
  return (
    <SafeAreaView>
      <Image style={styles.img} source={{uri: params.item.image_url}} />

      <Text style={styles.name} >{params.item.name}</Text>
      <Text style={styles.name}>{params.item.rating}</Text>
      <Text style={styles.name}>{params.item.phone}</Text>
      <Text style={styles.name}>{params.item.price}</Text>
    </SafeAreaView>
  );
};

export default DetailScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  img: {
    height: 120,
    width: 250,
    resizeMode: 'cover',
    marginTop: 10,
    marginLeft: 10,
  },
  title: {
    color: colors.black,
    fontSize: 22,
    fontWeight: '600',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 10,
  },
  center: {
    alignSelf: 'center',
  },
  name:{
    color:colors.black,
    fontSize:fontSizes.medium,
    fontWeight: '500',
    marginLeft:10
  }
});
