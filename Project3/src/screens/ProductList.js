import {useRoute} from '@react-navigation/native';
import React, {useState, useEffect} from 'react';
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
import {Data1, Data2} from '../mock/Mock';
import {colors} from '../utils/Variables';
import axios from 'axios';
import Api from '../utils/Api';
import ResultList from '../components/ResultList';
const baseUrl = 'https://api.yelp.com/v3/businesses/search';

const ProductList = props => {
  const {params} = useRoute();
  const [search, setsearch] = useState('');
  const [user, setuser] = useState([]);
  const [error, seterror] = useState('');
  const fetchData = async  () => {
    try {
      const response = await Api.get('/search',{
        params:{
          limit:1,
          location: 'san jose'
        }
      });
      console.log("gtyfghyjhghjg",response.data.businesses);
      const res = response.data.businesses;
      setuser(res);
    } catch (error) {
      console.log('Data fetching cancelled');
      seterror('Data fetching cancelled');
    }
  };

  useEffect(() => fetchData(), []);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.inputbox}>
        <CustomInput onChangeText={text => setsearch(text)} value={search} />
      </View>
      <ResultList title="Big spander" data={user}/>
      {error?<Text>{error}</Text>:null} 
      
    
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
    backgroundColor: colors.white,
    borderRadius: 35,
    height: 100,
    width: 100,
    borderColor: colors.gray,
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
    borderColor: colors.green,
    alignSelf: 'center',
  },
  title: {
    color: colors.black,
    fontSize: 22,
    fontWeight: '600',
    marginLeft: 15,
  },
  mail: {
    color: colors.black,
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
    borderBottomColor: colors.gray,
    marginVertical: 8,
    marginHorizontal: 10,
  },
});

export default ProductList;
