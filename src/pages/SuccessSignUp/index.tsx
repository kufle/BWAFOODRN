import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {IlSuccessSignUp} from '../../assets';
import {Button, Gap} from '../../components';
import {colors, fonts} from '../../utils';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

type RootStackParamList = {
  MainApp: undefined;
};

type Props = {
  navigation: NativeStackNavigationProp<RootStackParamList>;
};

const SuccessSignUp = ({navigation}: Props) => {
  return (
    <View style={styles.pages}>
      <IlSuccessSignUp />
      <Gap height={30} />
      <Text style={styles.title}>Yeay! Completed</Text>
      <Gap height={6} />
      <Text style={styles.subtitle}>Now you are able to order</Text>
      <Text style={styles.subtitle}>some foods as a self-reward</Text>
      <Gap height={30} />
      <View style={styles.buttonContainer}>
        <Button
          label="Find food"
          onPress={() =>
            navigation.reset({
              index: 0,
              routes: [{name: 'MainApp'}],
            })
          }
        />
      </View>
    </View>
  );
};

export default SuccessSignUp;

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
  },
  buttonContainer: {
    width: '100%',
    paddingHorizontal: 80,
  },
});
