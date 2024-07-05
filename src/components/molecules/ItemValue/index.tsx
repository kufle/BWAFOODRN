import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {colors, fonts} from '../../../utils';

type Props = {
  label: string;
  value: string | number;
  valueColor?: string;
};

const ItemValue = ({label, value, valueColor}: Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <Text style={valueColorStyle.value(valueColor)}>{value}</Text>
    </View>
  );
};

export default ItemValue;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  label: {
    fontSize: 14,
    fontFamily: fonts.primary.regular,
    color: colors.text.secondary,
  },
});

const valueColorStyle = {
  value: (color: string | undefined) => ({
    fontSize: 14,
    fontFamily: fonts.primary.regular,
    color: color ? color : colors.text.primary,
  }),
};
