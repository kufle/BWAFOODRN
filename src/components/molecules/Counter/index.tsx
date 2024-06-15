import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {IcMin, IcPlus} from '../../../assets';
import {colors, fonts} from '../../../utils';

const Counter = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <IcMin />
      </TouchableOpacity>
      <Text style={styles.value}>5</Text>
      <TouchableOpacity>
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
