import React, { useState } from 'react';
import {
  SafeAreaView,
  TouchableOpacity,
  Text,
  View,
  Image,
  FlatList,
  StyleSheet,
} from 'react-native';
import CustomInput from '../components/CustomInput';
import { Data } from '../mock/Mock';
import { colors } from '../utils/Variables';
const CategoryList = props => {
const [search, setsearch] = useState('');

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.inputbox}>
      <CustomInput 
       onChangeText={(text) =>setsearch(text)}
       value={search}
      />
      </View>
      <View style={styles.topspace}>
        <FlatList
          data={Data.filter(value=>{
           return  value.title.toLowerCase().includes(search.toLowerCase())
          })}
          renderItem={({item}) => (
            <View>
              <View style={styles.row}>
                <TouchableOpacity
                  style={styles.imgback}
                  onPress={() =>
                    props.navigation.navigate('ProductList',{item: item.title})
                  }>
                  <Image style={styles.img} source={item.img} />
                </TouchableOpacity>
                <Text style={styles.title}>{item.title}</Text>
              </View>
              <View style={styles.line} />
            </View>
          )}
        />
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
    backgroundColor:colors.white,
    borderRadius: 35,
    height: 65,
    width: 65,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: colors.gray,
    borderWidth: 1,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 10,
  },
  title: {
    color: colors.black,
    fontSize: 22,
    fontWeight: '600',
    marginLeft: 15,
  },
  line: {
    borderWidth: 0.5,
    borderBottomColor:colors.gray,
    marginVertical: 8,
    marginHorizontal:10
  },
  inputbox:{
    marginHorizontal:10,
    marginTop:10
  },
  topspace:{
      marginTop:20
  }
});

export default CategoryList;
