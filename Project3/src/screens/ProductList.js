import {useRoute} from '@react-navigation/native';
import React, {useState, useEffect, useCallback} from 'react';
import {debounce} from 'lodash';
import {SafeAreaView, StyleSheet, View, Text} from 'react-native';
import CustomInput from '../components/CustomInput';
import {colors, fontSizes} from '../utils/Variables';
import Api from '../utils/Api';
import ResultList from '../components/ResultList';

const ProductList = props => {
  const [search, setsearch] = useState('');
  const [user, setuser] = useState([]);
  const [error, seterror] = useState('');
  const [page, setpage] = useState(15);

 {/**  const debounce = func => {
    let timer;
    return function (...args) {
      const context = this;
      if (timer) clearTimeout(timer);
      timer = setTimeout(() => {
        timer = null;
        func.apply(context, args);
      }, 500);
    };
  };
*/}
  const fetchData = async value => {
    try {
      const response = await Api.get('/search', {
        params: {
          limit: 20,
          location: 'san jose',
        },
      });
      console.log('response is here..', response.data.businesses);
      const res = response.data.businesses;
      setuser(res);
    } catch (error) {
      console.log('Data fetching cancelled');
      seterror('Data fetching cancelled');
    }
  };
  const handleChangeWithLib = debounce( async (value) => {
    try {
      const response = await Api.get('/search', {
        params: {
          limit: 20,
          location: 'san jose',
        },
      });
      console.log('response is here..', response.data.businesses);
      const res = response.data.businesses;
      setuser(res);
    } catch (error) {
      console.log('Data fetching cancelled');
      seterror('Data fetching cancelled');
    }
  }, 500);
  //const handler = useCallback(debounce(fetchData, 2000), []);
   // const handler = useCallback(debounce(fetchData, 2000), []);
   // const onChange = (event) => {
   //  handler(event.target.value);
 //  };

  useEffect(() => {
    fetchData();
    console.log(page);
  }, [page]);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.inputbox}>
        <CustomInput
          onChangeText={text => setsearch(text)}
          value={search}
          onChange={(e) => handleChangeWithLib(e.target.value)}
        />
      </View>
      <ResultList
        title="Big spander"
        data={user}
        page={page}
        setpage={setpage}
      />
      {error ? <Text>{error}</Text> : null}
      
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
    fontSize: fontSizes.xxlarge,
    fontWeight: '600',
    marginLeft: 15,
  },
  mail: {
    color: colors.black,
    fontSize: fontSizes.medium,
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
