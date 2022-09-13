import React, {useState} from 'react';
import {
  SafeAreaView,
  TouchableOpacity,
  Text,
  View,
  Image,
  FlatList,
  StyleSheet,
} from 'react-native';

import {colors} from '../utils/Variables';
import ResultDetail from './ResultDetail';

const ResultList = props => {
  const [search, setsearch] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.name}>{props.title}</Text>
      <FlatList
        horizontal
        data={props.data}
        keyExtractor={data =>data.id}
        renderItem={({item}) => {
          return (
            <TouchableOpacity>
                <ResultDetail item={item} />
            </TouchableOpacity>
          )
           
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  name: {
    color: colors.black,
    fontSize: 22,
    fontWeight: '600',
    marginTop: 10,
    marginLeft:10
  },
});

export default ResultList;
