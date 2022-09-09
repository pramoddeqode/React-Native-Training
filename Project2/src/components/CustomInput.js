import {TextInput, StyleSheet} from 'react-native';

const CustomInput = props => {
  return (
    <TextInput
      style={styles.input}
      onChangeText={props.onChangeText}
      value={props.value}
      placeholder="Search"
      keyboardType="numeric"
    />
  );
};
const styles = StyleSheet.create({
  input: {
    backgroundColor: 'white',
    borderRadius: 10,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingLeft:10
  },
});

export default CustomInput;
