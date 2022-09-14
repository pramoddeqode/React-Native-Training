import React from 'react';
import {
  TouchableOpacity,
  Text,
  View,
  FlatList,
  StyleSheet,
} from 'react-native';

import {colors, fontSizes} from '../utils/Variables';
import ResultDetail from './ResultDetail';

const ResultList = ({title, data, page,setpage}) => {
  
  return (
    <View style={styles.container}>
      <Text style={styles.name}>{title}</Text>
      <FlatList
        horizontal
        data={data}
        onEndReachedThreshold={0.5}
        onEndReached={()=>setpage(page+1)}
        keyExtractor={item => item.id}
        renderItem={({item}) => {
          return (
            <TouchableOpacity>
              <ResultDetail item={item} />
            </TouchableOpacity>
          );
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
    fontSize:fontSizes.xxlarge,
    fontWeight: '600',
    marginTop: 10,
    marginLeft: 10,
  },
});

export default ResultList;
