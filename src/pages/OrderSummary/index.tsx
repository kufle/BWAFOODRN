import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RouteProp} from '@react-navigation/native';
import {Header, ItemListFood, ItemValue} from '../../components/molecules';
import {Button, Gap} from '../../components';
import {colors, fonts, formatNumber} from '../../utils';
import {useDispatch} from 'react-redux';
import {AppDispatch} from '../../store';
import { checkoutAction } from '../../store/reducers/checkOutSlice';

type RootStackParamList = {
  SuccessOrder: undefined;
};

type Props = {
  navigation: NativeStackNavigationProp<RootStackParamList>;
  route: RouteProp<RootStackParamList>;
};

const OrderSummary = ({navigation, route}: Props) => {
  console.log(route.params);
  const {item, transaction, userProfile}: any = route.params;
  const dispatch = useDispatch<AppDispatch>();

  const onCheckout = () => {
    const data = {
      food_id: item.id,
      user_id: userProfile.id,
      quantity: transaction.totalItem,
      total: transaction.total,
      status: 'PENDING',
    };
    dispatch(checkoutAction(data));
    //navigation.navigate('SuccessOrder');
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <Header
        title="Payment"
        description="You deserve better meal"
        onPress={() => navigation.goBack()}
      />
      <View style={styles.content}>
        <Text style={styles.label}>Item Ordered</Text>
        <ItemListFood
          name={item.name}
          price={formatNumber(item.price)}
          image={item.picture_url}
          type="order-summary"
          items={Number(transaction.totalItem)}
        />
        <Text style={styles.label}>Details Transaction</Text>
        <ItemValue
          label={item.name}
          value={`IDR ${formatNumber(transaction.totalPrice)}`}
        />
        <ItemValue
          label="Driver"
          value={`IDR ${formatNumber(transaction.driver)}`}
        />
        <ItemValue
          label="Tax 10%"
          value={`IDR ${formatNumber(transaction.tax)}`}
        />
        <ItemValue
          label="Total Price"
          value={`IDR ${formatNumber(transaction.total)}`}
          valueColor={colors.green}
        />
      </View>

      <View style={styles.content}>
        <Text style={styles.label}>Deliver To:</Text>
        <ItemValue label="Name" value={userProfile.name} />
        <ItemValue label="Phone No." value={userProfile.phone_number} />
        <ItemValue label="Address" value={userProfile.address} />
        <ItemValue label="House No." value={userProfile.house_number} />
        <ItemValue label="City" value={userProfile.city} />
      </View>

      <View style={styles.buttonContainer}>
        <Button label="Checkout Now" onPress={onCheckout} />
      </View>

      <Gap height={40} />
    </ScrollView>
  );
};

export default OrderSummary;

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
