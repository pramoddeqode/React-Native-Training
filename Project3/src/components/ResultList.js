import {result} from 'lodash';
import React from 'react';
import {TouchableOpacity, Text, View, FlatList, StyleSheet} from 'react-native';

import {colors, fontSizes} from '../utils/Variables';
import ResultDetail from './ResultDetail';

const ResultList = ({title, user}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>{title}</Text>

      <FlatList
        horizontal
        data={user}
        //onEndReachedThreshold={0.5}
        // onEndReached={()=>setpage(page+1)}
        keyExtractor={result => result.id}
        renderItem={({item}) => {
          return (
            <TouchableOpacity>
              <ResultDetail result={item} />
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
    fontSize: fontSizes.xxlarge,
    fontWeight: '600',
    marginTop: 10,
    marginLeft: 10,
  },
});

export default ResultList;
