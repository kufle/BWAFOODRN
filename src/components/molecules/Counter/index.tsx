import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {IcMin, IcPlus} from '../../../assets';
import {colors, fonts} from '../../../utils';

interface Props {
  counter: number;
  setCounter: (value: (val: number) => number) => void;
}

const Counter = ({counter, setCounter}: Props) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => setCounter((val: number) => (val > 1 ? val - 1 : 1))}>
        <IcMin />
      </TouchableOpacity>
      <Text style={styles.value}>{counter}</Text>
      <TouchableOpacity onPress={() => setCounter((val: number) => val + 1)}>
        <IcPlus />
      </TouchableOpacity>
    </View>
  );
};

export default Counter;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  value: {
    fontFamily: fonts.primary.regular,
    fontSize: 16,
    color: colors.text.primary,
    marginHorizontal: 10,
  },
});
