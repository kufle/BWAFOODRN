import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {Header, ItemListFood, ItemValue} from '../../components/molecules';
import {Button} from '../../components';
import {colors, fonts} from '../../utils';

type RootStackParamList = {
  SuccessOrder: undefined;
};

type Props = {
  navigation: NativeStackNavigationProp<RootStackParamList>;
};

const OrderSummary = ({navigation}: Props) => {
  return (
    <View>
      <Header
        title="Payment"
        description="You deserve better meal"
        onPress={() => {}}
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.content}>
          <Text style={styles.label}>Item Ordered</Text>
          <ItemListFood items={3} />
          <Text style={styles.label}>Details Transaction</Text>
          <ItemValue label="Bubur Mang" value="IDR 8.000" />
          <ItemValue label="Driver" value="IDR 0" />
          <ItemValue label="Tax 10%" value="IDR 0" />
          <ItemValue
            label="Total Price"
            value="IDR 8.000"
            valueColor={colors.green}
          />
        </View>

        <View style={styles.content}>
          <Text style={styles.label}>Deliver To:</Text>
          <ItemValue label="Name" value="Irawan" />
          <ItemValue label="Phone No." value="0812345678" />
          <ItemValue label="Address" value="Jl. Nanjung Kp.Cibodas" />
          <ItemValue label="House No." value="19" />
          <ItemValue label="City" value="Cimahi" />
        </View>

        <View style={styles.buttonContainer}>
          <Button
            label="Checkout Now"
            onPress={() => navigation.navigate('SuccessOrder')}
          />
        </View>
      </ScrollView>
    </View>
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
