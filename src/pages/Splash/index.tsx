import React, {useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Logo} from '../../assets';
import {colors, fonts} from '../../utils';
import {Gap} from '../../components';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {useDispatch} from 'react-redux';
import {AppDispatch} from '../../store';
import {checkUser} from '../../store/reducers/authSlice';

type RootStackParamList = {
  SignIn: undefined;
  MainApp: undefined;
};

type Props = {
  navigation: NativeStackNavigationProp<RootStackParamList>;
};

const SplashScreen = ({navigation}: Props) => {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    const checkAuth = async () => {
      try {
        await dispatch(checkUser()).unwrap();
        navigation.reset({index: 0, routes: [{name: 'MainApp'}]});
      } catch (error) {
        navigation.replace('SignIn');
      }
    };
    checkAuth();
  }, [dispatch, navigation]);

  return (
    <View style={styles.page}>
      <Logo />
      <Gap height={38} />
      <Text style={styles.title}>FoodMarket</Text>
      <Text>Loading...</Text>
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
