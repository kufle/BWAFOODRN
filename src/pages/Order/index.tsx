import {StyleSheet, View} from 'react-native';
import React from 'react';
import {Header, OrderTabSection} from '../../components/molecules';

const Order = () => {
  return (
    <View style={styles.pages}>
      {/* <EmptyOrder /> */}
      <Header title="Your Orders" description="Wait for the best meal" />
      <View style={styles.tabContainer}>
        <OrderTabSection />
      </View>
    </View>
  );
};

export default Order;

const styles = StyleSheet.create({
  pages: {
    flex: 1,
  },
  tabContainer: {
    flex: 1,
    marginTop: 24,
  },
});
