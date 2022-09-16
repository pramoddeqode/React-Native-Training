import {TextInput, StyleSheet} from 'react-native';
import {colors} from '../utils/Variables';
import {} from '../components/hooks/useResult'
const CustomInput = ({term, onTermChange,onTermSubmit}) => {
  return (
    <TextInput
      autoCorrect={false}
      autoCapitalize="none"
      style={styles.input}
      onChangeText={text => {
        onTermChange(text)
      }}
      value={term}
      placeholder="Search"
      keyboardType="default"
      onEndEditing={onTermSubmit}
    />
  );
};
const styles = StyleSheet.create({
  input: {
    backgroundColor: colors.white,
    borderRadius: 10,
    height: 40,
    borderColor: colors.gray,
    borderWidth: 1,
    paddingLeft: 10,
  },
});

export default CustomInput;
