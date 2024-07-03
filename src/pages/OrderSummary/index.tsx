import React, {useState} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import WebView from 'react-native-webview';
import {RouteProp} from '@react-navigation/native';
import {useDispatch} from 'react-redux';
import {
  Header,
  ItemListFood,
  ItemValue,
  Loading,
} from '../../components/molecules';
import {Button, Gap} from '../../components';
import {colors, fonts, formatNumber} from '../../utils';
import {AppDispatch} from '../../store';
import {checkoutAction} from '../../store/reducers/checkOutSlice';

type RootStackParamList = {
  SuccessOrder: undefined;
  MainApp: undefined;
};

type Props = {
  navigation: NativeStackNavigationProp<RootStackParamList>;
  route: RouteProp<RootStackParamList>;
};

const OrderSummary = ({navigation, route}: Props) => {
  //console.log(route.params);
  const {item, transaction, userProfile}: any = route.params;
  const [isPaymentOpen, setIsPaymentOpen] = useState(false);
  const [paymentURL, setPaymentURL] = useState('');

  const dispatch = useDispatch<AppDispatch>();

  const onCheckout = async () => {
    try {
      const data = {
        food_id: item.id,
        user_id: userProfile.id,
        quantity: transaction.totalItem,
        total: transaction.total,
        status: 'PENDING',
      };
      const response = await dispatch(checkoutAction(data)).unwrap();
      setPaymentURL(response.payment_url);
      setIsPaymentOpen(true);
    } catch (error) {
      console.log('err', error);
    }
    //navigation.navigate('SuccessOrder');
  };

  const onNavChangeWeb = (state: any) => {
    //console.log(state);
    // const urlSuccess ='https://food.kame.my.id/success_order?order_id=15&status_code=200&transaction_status=settlement';
    const titleWeb = 'Laravel';
    if (state.title === titleWeb) {
      navigation.reset({
        index: 0,
        routes: [{name: 'SuccessOrder'}],
      });
    }
  };

  if (isPaymentOpen) {
    return (
      <>
        <Header
          title="Payment"
          description="Order Summary"
          onPress={() =>
            navigation.reset({
              index: 0,
              routes: [{name: 'MainApp', state: {routes: [{name: 'Order'}]}}],
            })
          }
        />
        <WebView
          startInLoadingState={true}
          renderLoading={() => <Loading />}
          source={{
            uri: paymentURL,
          }}
          onNavigationStateChange={onNavChangeWeb}
        />
      </>
    );
  }

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
