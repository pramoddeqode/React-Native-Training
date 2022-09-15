import {useRoute} from '@react-navigation/native';
import React, {useState, useEffect, useCallback} from 'react';
import {debounce} from 'lodash';
import {SafeAreaView, StyleSheet, View, Text} from 'react-native';
import CustomInput from '../components/CustomInput';
import Api from '../utils/Api';
import ResultList from '../components/ResultList';

const Category = props => {
  const [search, setsearch] = useState('');
  const [user, setuser] = useState([]);
  const [error, seterror] = useState('');
  const [page, setpage] = useState(1);

  const fetchData = async value => {
    try {
      const response = await Api.get('/search', {
        params: {
          limit: 50,
          location: 'san jose',
          term: value,
          
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
  const handler = useCallback(
    debounce(text => fetchData(text), 500),
    [],
  );
  useEffect(() => {
    fetchData();
    console.log(page);
  }, [page]);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.inputbox}>
        <CustomInput
          onChangeText={text => {
            setsearch(text);
            handler(text);
          }}
          value={search}
        />
      </View>
      <ResultList
        title="Big spander"
        data={user}
        page={page}
        setpage={setpage}
      />
      
      {error ? <Text >{error}</Text> : null}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inputbox: {
    marginHorizontal: 10,
    marginTop: 10,
  },
  });

export default Category;
