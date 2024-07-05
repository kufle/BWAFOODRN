import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {Header, ItemListFood, ItemValue} from '../../components/molecules';
import {colors, fonts, formatNumber} from '../../utils';
import {Button, Gap} from '../../components';
import {RouteProp} from '@react-navigation/native';
import {useDispatch} from 'react-redux';
import {AppDispatch} from '../../store';
import {cancelOrder} from '../../store/reducers/orderSlice';
import {showMessage} from 'react-native-flash-message';

type RootStackParamList = {
  MainApp: undefined;
};

type Props = {
  navigation: NativeStackNavigationProp<RootStackParamList>;
  route: RouteProp<RootStackParamList>;
};

const OrderDetail = ({navigation, route}: Props) => {
  const order: any = route.params;

  const totalPrice = Number(order.quantity) * order.food.price;
  const driver = 5000;
  const tax = (10 / 100) * totalPrice;
  const total = totalPrice + driver + tax;

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'CANCELLED':
        return colors.danger;
      case 'PENDING':
        return colors.green;
      case 'SUCCESS':
        return colors.green;
      default:
        return colors.green;
    }
  };

  const dispatch = useDispatch<AppDispatch>();
  const onCancel = async (id: string | number) => {
    try {
      await dispatch(cancelOrder(id)).unwrap();
      navigation.reset({
        index: 0,
        routes: [{name: 'MainApp', state: {routes: [{name: 'Order'}]}}],
      });
    } catch (error: any) {
      let errMessage = '';
      if (error?.errors) {
        const errors = error.errors;
        errMessage += error.message + '\n';
        Object.keys(errors).map(key => {
          errMessage += errors[key][0] + '\n';
        });
      }
      showMessage({
        message: errMessage,
        type: 'danger',
      });
    }
  };
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <Header
        title="Order Summary"
        description="You deserve better meal"
        onPress={() => navigation.goBack()}
      />

      <View style={styles.content}>
        <Text style={styles.label}>Item Ordered</Text>
        <ItemListFood
          name={order.food.name}
          price={order.food.price_format}
          image={order.food.picture_url}
          type="order-summary"
          items={order.quantity}
        />
        <Text style={styles.label}>Details Transaction</Text>
        <ItemValue
          label={order.food.name}
          value={`IDR ${formatNumber(totalPrice)}`}
        />
        <ItemValue label="Driver" value={`IDR ${formatNumber(driver)}`} />
        <ItemValue label="Tax 10%" value={`IDR ${formatNumber(tax)}`} />
        <ItemValue
          label="Total Price"
          value={`IDR ${formatNumber(total)}`}
          valueColor={colors.green}
        />
      </View>

      <View style={styles.content}>
        <Text style={styles.label}>Deliver To:</Text>
        <ItemValue label="Name" value={order.user.name} />
        <ItemValue label="Phone No." value="0812345678" />
        <ItemValue label="Address" value={order.user.address} />
        <ItemValue label="House No." value={order.user.house_number} />
        <ItemValue label="City" value={order.user.city} />
      </View>

      <View style={styles.content}>
        <Text style={styles.label}>Order Status:</Text>
        <ItemValue
          label={`#FM${order.id.toString().padStart(5, '0')}`}
          value={order.status}
          valueColor={getStatusColor(order.status)}
        />
      </View>

      {order.status === 'PENDING' && (
        <View style={styles.buttonContainer}>
          <Button
            label="Cancel Order"
            onPress={() => onCancel(order.id)}
            variant="danger"
          />
        </View>
      )}

      <Gap height={40} />
    </ScrollView>
  );
};

export default OrderDetail;

const styles = StyleSheet.create({
  content: {
    backgroundColor: colors.white,
    paddingHorizontal: 24,
    paddingVertical: 16,
    marginTop: 24,
  },
  label: {
    fontSize: 14,
    fontFamily: fonts.primary.regular,
    color: colors.text.primary,
    marginBottom: 8,
  },
  buttonContainer: {
    paddingHorizontal: 24,
    marginTop: 24,
  },
});
