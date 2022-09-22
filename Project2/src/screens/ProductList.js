import {useRoute} from '@react-navigation/native';
import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Image,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import CustomInput from '../components/CustomInput';
import {Data1,Data2} from '../mock/Mock';
import { colors } from '../utils/Variables';

const ProductList = props => {
  const {params} = useRoute();
  const [search, setsearch] = useState('');
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.inputbox}>
        <CustomInput onChangeText={text => setsearch(text)} value={search} />
      </View>
      
      {
        params.item == 'Fruits' ?
      <View>
        <FlatList
          data={Data1.filter(value=>{
            return  value.title.toLowerCase().includes(search.toLowerCase())
           })}
          renderItem={({item}) => (
            <View>
              
             <TouchableOpacity  style={styles.row} onPress={() =>
                    props.navigation.navigate('DetailScreen',{item:item})
                  }> 
                  
                <Image style={styles.img} source={item.img} />
                <Text style={styles.title}>{item.title}</Text>
                
                </TouchableOpacity>
             <View style={styles.line} />
            </View>
          )}
        />
      </View>
      :
      <View>
        <FlatList
           data={Data2.filter(value=>{
            return  value.title.toLowerCase().includes(search.toLowerCase())
           })}
          renderItem={({item}) => (
            <View>
              <TouchableOpacity  style={styles.row} onPress={() =>
                    props.navigation.navigate('DetailScreen',{item:item})
                  }>
                   <Image style={styles.img} source={item.img} /> 
                   <Text style={styles.title}>{item.title}</Text>
                </TouchableOpacity>
             <View style={styles.line} />
            </View>
          )}
        />
      </View>
}
      
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 10,
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
    height: 100,
    width: 100,
    borderColor:colors.gray,
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
    borderColor:colors.green,
    alignSelf: 'center',
  },
  title: {
    color:colors.black,
    fontSize: 22,
    fontWeight: '600',
    marginLeft: 15,
  },
  mail: {
    color:colors.black,
    fontSize: 14,
    fontWeight: '500',
    textAlign: 'center',
    marginTop: 10,
  },
  inputbox: {
    marginHorizontal: 10,
    marginTop: 10,
  },
  line: {
    borderWidth: 0.5,
    borderBottomColor:colors.gray,
    marginVertical: 8,
    marginHorizontal: 10,
  },
});

export default ProductList;
