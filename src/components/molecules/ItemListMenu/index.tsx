import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {IcNext} from '../../../assets';
import {colors, fonts} from '../../../utils';

type Props = {
  text: string;
  onPress?: () => void;
};

const ItemListMenu = ({text, onPress}: Props) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <Text style={styles.text}>{text}</Text>
        <IcNext />
      </View>
    </TouchableOpacity>
  );
};

export default ItemListMenu;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 8,
  },
  text: {
    fontSize: 14,
    fontFamily: fonts.primary.regular,
    color: colors.text.primary,
  },
});
