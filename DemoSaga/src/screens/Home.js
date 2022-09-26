import React, { useEffect} from 'react';
import {StyleSheet,Text, SafeAreaView} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import { productList } from '../reduxSaga/actions/productAction';

const Home = () => {
  const dispatch = useDispatch();
  const data = useSelector(state => state.productData);

  useEffect(() => {
    dispatch(productList());
  }, [dispatch]);
   
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.heading}>Redux Saga Demo</Text>
      { 
        data.map((user,index) => <Text key={index} style={styles.txt}>{user.username}</Text>)
      }
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  heading: {
    fontSize: 22,
    fontWeight: '700',
    color: 'black',
    textAlign: 'center',
  },
  txt: {
    fontSize: 18,
    fontWeight: '500',
    color: 'black',
    textAlign: 'center',
    marginVertical: 10,
  },
});
export default Home;
