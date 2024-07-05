import {StyleSheet, View} from 'react-native';
import React, {useEffect} from 'react';
import {EmptyOrder, Header, OrderTabSection} from '../../components/molecules';
import {colors} from '../../utils';
import {useDispatch, useSelector} from 'react-redux';
import {AppDispatch, RootState} from '../../store';
import {fetchOrder} from '../../store/reducers/orderSlice';

const Order = () => {
  const {inProgress, pastOrders}: any = useSelector(
    (state: RootState) => state.order,
  );
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    dispatch(fetchOrder('in_progress'));
    dispatch(fetchOrder('past_orders'));
  }, [dispatch]);

  return (
    <View style={styles.pages}>
      {inProgress?.data?.length >= 1 || pastOrders?.data?.length >= 1 ? (
        <>
          <Header title="Your Orders" description="Wait for the best meal" />
          <View style={styles.tabContainer}>
            <OrderTabSection />
          </View>
        </>
      ) : (
        <EmptyOrder />
      )}
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
    backgroundColor: colors.white,
  },
});
