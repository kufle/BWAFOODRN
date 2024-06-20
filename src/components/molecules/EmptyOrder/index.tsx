import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {IlEmptyOrder} from '../../../assets';
import {colors, fonts} from '../../../utils';
import {Button, Gap} from '../../atoms';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {useNavigation} from '@react-navigation/native';

type RootStackParamList = {
  MainApp: undefined;
  Order: undefined;
};

const EmptyOrder = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  return (
    <View style={styles.pages}>
      <IlEmptyOrder />
      <Gap height={30} />
      <Text style={styles.title}>Ouch! Hungry</Text>
      <Gap height={6} />
      <Text style={styles.subtitle}>
        Seems like you have not{'\n'}ordered any food yet
      </Text>
      <Gap height={30} />
      <View style={styles.buttonContainer}>
        <Button
          label="Find Foods"
          onPress={() => navigation.replace('MainApp')}
        />
      </View>
    </View>
  );
};

export default EmptyOrder;

const styles = StyleSheet.create({
  pages: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.white,
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
