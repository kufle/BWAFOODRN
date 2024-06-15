import {StyleSheet, Text, View, TextInput} from 'react-native';
import React from 'react';
import {colors, fonts} from '../../../utils';

type Props = {
  label?: string;
};

const Input = ({label}: Props) => {
  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <TextInput style={styles.input} placeholder={label} />
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
