import React, {useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Logo} from '../../assets';
import {colors, fonts} from '../../utils';
import {Gap} from '../../components';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

type RootStackParamList = {
  SignIn: undefined;
};

type Props = {
  navigation: NativeStackNavigationProp<RootStackParamList>;
};

const SplashScreen = ({navigation}: Props) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('SignIn');
    }, 2000);
  }, [navigation]);

  return (
    <View style={styles.page}>
      <Logo />
      <Gap height={38} />
      <Text style={styles.title}>FoodMarket</Text>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 32,
    color: colors.text.primary,
    fontFamily: fonts.primary.medium,
  },
});
