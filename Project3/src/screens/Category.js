import {useRoute} from '@react-navigation/native';
import React, {useState} from 'react';
import useResult from '../components/hooks/useResult';
import {SafeAreaView, StyleSheet, View, Text} from 'react-native';
import CustomInput from '../components/CustomInput';
import ResultList from '../components/ResultList';
import { result } from 'lodash';

const Category = props => {
  const [term, setTerm] = useState('');
  const [user,error,fetchData] = useResult();
 
  filterResultByPrice = (price)=>{
       return user.filter(result=>{
        return result.price === price;
       });
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.inputbox}>
        <CustomInput
          term={term}
          onTermChange={setTerm}
          onTermSubmit={() => fetchData(term)}
          
        />
      </View>
     <Text>We have found {user.length} result </Text>
      {error ? <Text>{error}</Text> : null}
      <ResultList
        title="Cost Effective"
        user = {filterResultByPrice('$')}
      />
       <ResultList
        title="Bit Pricier"
        user = {filterResultByPrice('$$')}
      />
       <ResultList
        title="Big Spander"
        user = {filterResultByPrice('$$$')}
      />
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
