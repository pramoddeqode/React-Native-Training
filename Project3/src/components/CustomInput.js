import {TextInput, StyleSheet} from 'react-native';
import { colors } from '../utils/Variables';

const CustomInput = props => {
  return (
    <TextInput
      style={styles.input}
      onChangeText={props.onChangeText}
      value={props.value}
      placeholder="Search"
      keyboardType="default"
    />
  );
};
const styles = StyleSheet.create({
  input: {
    backgroundColor:colors.white,
    borderRadius: 10,
    height: 40,
    borderColor:colors.gray,
    borderWidth: 1,
    paddingLeft:10
  },
});

export default CustomInput;
