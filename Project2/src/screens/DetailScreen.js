import React, { useState } from 'react';
import { SafeAreaView, StyleSheet,Text, View ,TouchableOpacity,TextInput} from 'react-native';


const DetailScreen = (props) => {
   
  return (
    <SafeAreaView style={styles.container}>
     <View>
      <Text>Details</Text>
     </View>
    </SafeAreaView>
  );
};

export default DetailScreen;

const styles = StyleSheet.create({
container:{
    flex:1
},
})