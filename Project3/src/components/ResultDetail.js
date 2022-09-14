import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {Text, View, Image, StyleSheet, TouchableOpacity} from 'react-native';

import {colors, fontSizes} from '../utils/Variables';

const ResultDetail = props => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('DetailScreen', {item: props.item})}>
      <Image style={styles.img} source={{uri: props.item.image_url}} />
      <Text style={styles.name}>{props.item.name}</Text>
    </TouchableOpacity>
  );
};

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
  name: {
    color: colors.black,
    fontSize: fontSizes.medium,
    fontWeight: '600',
    marginLeft: 10,
  },
});

export default ResultDetail;
