import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from 'react-native';


const LoginScreen = props => {
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');
  const [emailValidError, setEmailValidError] = useState('');

  const handleValidEmail = value => {
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;

    if (value.length === 0) {
      setEmailValidError('email address must be enter');
    } else if (reg.test(value) === false) {
      setEmailValidError('enter valid email address');
    } else if (reg.test(value) === true) {
      setEmailValidError('');
    }
  };

  
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.main}>
        <Text style={styles.Heading}>Email</Text>
        <TextInput
          style={styles.input}
          onChangeText={value => {
            setemail(value);
          }}
          onEndEditing = {(value)=>  handleValidEmail(value)}
          value={email}
          placeholder="Enter Email"
          keyboardType="email-address"
        />
         {emailValidError ? <Text style={styles.left}>{emailValidError}</Text> :null}
      </View>
     
      <View style={styles.main}>
        <Text style={styles.Heading}>Password</Text>
        <TextInput
          style={styles.input}
          onChangeText={value => setpassword(value)}
          value={password}
          placeholder="Enter Password"
          keyboardType="phone-pad"
        />
      </View>
      <TouchableOpacity
        style={styles.login}
        onPress={() => props.navigation.navigate('HomeScreen')}>
        <Text style={styles.logintxt}>Login</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  Heading: {
    color: 'black',
    fontSize: 16,
    fontWeight: '600',
    marginLeft: 15,
  },
  input: {
    height: 40,
    borderWidth: 1,
    borderRadius: 8,
    paddingLeft: 10,
    borderColor: 'gray',
    marginVertical: 5,
    marginHorizontal: 15,
  },
  main: {
    marginTop: 20,
  },
  login: {
    backgroundColor: 'green',
    borderRadius: 15,
    padding: 10,
    width: '50%',
    alignSelf: 'center',
    marginTop: 50,
  },
  logintxt: {
    color: 'white',
    fontSize: 18,
    fontWeight: '600',
    textAlign: 'center',
  },
  left:{
    marginLeft:15
  }
});
