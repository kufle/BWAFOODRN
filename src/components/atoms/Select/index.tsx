import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import {colors, fonts} from '../../../utils';

type Props = {
  label: string;
};

const Select = ({label}: Props) => {
  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.select}>
        <Picker>
          <Picker.Item label="WKWK" />
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
