import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {IcNext} from '../../../assets';
import {colors, fonts} from '../../../utils';

type Props = {
  text: string;
};

const ItemListMenu = ({text}: Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{text}</Text>
      <IcNext />
    </View>
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
