import {StyleSheet, Text, View, TextInput, TextInputProps} from 'react-native';
import React from 'react';
import {colors, fonts} from '../../../utils';

interface CustomTextInputProp extends TextInputProps {
  label?: string;
}

const Input = ({label, ...props}: CustomTextInputProp) => {
  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <TextInput style={styles.input} placeholder={label} {...props} />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  label: {
    fontSize: 16,
    fontFamily: fonts.primary.regular,
    color: colors.text.primary,
  },
  input: {
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 8,
    padding: 10,
  },
});
