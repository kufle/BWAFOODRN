import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import {colors, fonts} from '../../../utils';

type Props = {
  label: string;
  selectedValue?: string;
  onValueChange?: (key: string, value: any) => void;
};

const Select = ({label, selectedValue, onValueChange}: Props) => {
  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.select}>
        <Picker selectedValue={selectedValue} onValueChange={onValueChange}>
          <Picker.Item label="" />
          <Picker.Item label="WKWK" value="wkwk" />
          <Picker.Item label="HEHE" value="hehe" />
        </Picker>
      </View>
    </View>
  );
};

export default Select;

const styles = StyleSheet.create({
  label: {
    fontSize: 16,
    fontFamily: fonts.primary.regular,
    color: colors.text.primary,
  },
  select: {
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 8,
  },
});
