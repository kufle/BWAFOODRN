import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {colors, fonts} from '../../utils';
import {Button, Gap} from '../../components';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {IlSuccessOrder} from '../../assets';

type RootStackParamList = {
  MainApp: undefined;
  Order: undefined;
};

type Props = {
  navigation: NativeStackNavigationProp<RootStackParamList>;
};

const SuccessOrder = ({navigation}: Props) => {
  return (
    <View style={styles.pages}>
      <IlSuccessOrder />
      <Gap height={30} />
      <Text style={styles.title}>You've made order</Text>
      <Gap height={6} />
      <Text style={styles.subtitle}>
        Just stay at home while we are{'\n'}preparing your best foods
      </Text>
      <Gap height={30} />
      <View style={styles.buttonContainer}>
        <Button
          label="Order Other Food"
          onPress={() =>
            navigation.reset({
              index: 0,
              routes: [{name: 'MainApp'}],
            })
          }
        />
        <Gap height={12} />
        <Button
          label="View My Order"
          onPress={() =>
            navigation.reset({
              index: 0,
              routes: [{name: 'MainApp', state: {routes: [{name: 'Order'}]}}],
            })
          }
          variant="secondary"
        />
      </View>
    </View>
  );
};

export default SuccessOrder;

const styles = StyleSheet.create({
  pages: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    color: colors.text.primary,
    fontFamily: fonts.primary.medium,
  },
  subtitle: {
    fontSize: 14,
    fontFamily: fonts.primary.regular,
    color: colors.text.secondary,
    textAlign: 'center',
  },
  buttonContainer: {
    width: '100%',
    paddingHorizontal: 80,
  },
});
