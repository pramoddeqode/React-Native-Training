import React, { useEffect} from 'react';
import {StyleSheet,Text, SafeAreaView} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';

import {setPageList} from '../reduxThunk/actions/pageList';

const Home = () => {
  const dispatch = useDispatch();
  const userList = useSelector(state => state.userList);
  const {pageList, error} = userList;

  useEffect(() => {
    dispatch(setPageList());
  }, [dispatch]);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.heading}>Redux Thunk Demo</Text>
      {error ? (
        <Text>{error}</Text>
      ) : (
        pageList.map(user => <Text style={styles.txt}>{user.username}</Text>)
      )}
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
