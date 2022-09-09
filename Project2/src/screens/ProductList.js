import {useRoute} from '@react-navigation/native';
import React,{useState}from 'react';
import {SafeAreaView, StyleSheet, View, Text, Image} from 'react-native';
import CustomInput from '../components/CustomInput';


const ProductList = props => {
  const {params} = useRoute();
  const [search, setsearch] = useState('');
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.inputbox}>
      <CustomInput 
       onChangeText={(text) =>setsearch(text)}
       value={search}
      />
      </View>
      <View style={styles.main}>
        <Image style={styles.profile1} source={params.item.img} />
        <Text style={styles.title}>{params.item.title}</Text>
        <Text style={styles.mail}>{params.item.mail}</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  img: {
    resizeMode: 'contain',
    height: 60,
    width: 60,
    borderRadius: 25,
  },
  imgback: {
    backgroundColor: 'white',
    borderRadius: 35,
    height: 100,
    width: 100,
    //    alignItems:'center',
    //    justifyContent:'center',
    borderColor: 'gray',
    borderWidth: 1,
    marginTop: 30,
  },
  main: {
    marginTop: 20,
  },
  profile1: {
    resizeMode: 'contain',
    height: 100,
    width: 100,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: 'green',
    alignSelf: 'center',
  },
  title: {
    color: 'black',
    fontSize: 22,
    fontWeight: '600',

    textAlign: 'center',
    marginTop: 10,
  },
  mail: {
    color: 'black',
    fontSize: 14,
    fontWeight: '500',
    textAlign: 'center',
    marginTop: 10,
  },
  inputbox:{
    marginHorizontal:10,
    marginTop:10
  },
});

export default ProductList;
