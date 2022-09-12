import {BaseRouter} from '@react-navigation/native';
import React from 'react';
import {
  SafeAreaView,
  TouchableOpacity,
  Text,
  View,
  Image,
  FlatList,
  StyleSheet,
} from 'react-native';
import {Data} from '../mock/Mock';
import { colors } from '../utils/Variables';

const HomeScreen = props => {

const onNavHandler = ()=> props.navigation.navigate('ProfileScreen', {item: item})

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <FlatList
          data={Data}
          renderItem={({item}) => (
            <View>
              <View style={styles.row}>
                <TouchableOpacity
                  style={styles.imgback}
                  onPress={onNavHandler}>
                  <Image style={styles.img} source={item.img} />
                </TouchableOpacity>
                <View>
                  <Text style={styles.title}>{item.title}</Text>
                  <Text style={styles.mail}>{item.mail}</Text>
                </View>
              </View>
              <View style={styles.line} />
            </View>
          )}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
    height: 65,
    width: 65,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor:colors.gray,
    borderWidth: 1,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 10,
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
    marginLeft: 15,
  },
  line: {
    borderWidth: 0.3,
    borderBottomColor:colors.gray,
    marginVertical: 8,
  },
});

export default HomeScreen;
