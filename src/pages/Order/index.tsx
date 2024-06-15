import {StyleSheet, View} from 'react-native';
import React from 'react';
import {EmptyOrder} from '../../components/molecules';
import {colors} from '../../utils';

const Order = () => {
  return (
    <View style={styles.pages}>
      <EmptyOrder />
    </View>
  );
};

export default Order;

const styles = StyleSheet.create({
  pages: {
    flex: 1,
    backgroundColor: colors.white,
  },
});
