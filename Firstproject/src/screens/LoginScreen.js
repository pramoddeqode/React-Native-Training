import React from 'react';
import { SafeAreaView, StyleSheet,Text, View ,TouchableOpacity} from 'react-native';


const LoginScreen = (props) => {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.Heading}>Enter Email</Text>

      </View>
  </SafeAreaView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
container:{
    flex:1
},
Heading:{
   color:'black',
   fontSize:16,
   fontWeight:'600' 
}

})