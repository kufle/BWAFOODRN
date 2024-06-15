import {StyleSheet, View} from 'react-native';
import React from 'react';
import {Header} from '../../components/molecules';
import {Button, Gap, Input, Link} from '../../components';
import {colors} from '../../utils';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

type RootStackParamList = {
  SignUp: undefined;
};

type Props = {
  navigation: NativeStackNavigationProp<RootStackParamList>;
};

const SignIn = ({navigation}: Props) => {
  return (
    <View style={styles.page}>
      <Header title="Sign In" description="Find your best ever meal" />
      <View style={styles.container}>
        <Input label="Email Address" />
        <Gap height={16} />
        <Input label="Password" />
        <Gap height={24} />
        <Button label="Login" />
        <Gap height={24} />
        <Link
          label="Already have an account ? Sign Up"
          align="center"
          fontSize={14}
          onPress={() => {
            navigation.navigate('SignUp');
          }}
        />
      </View>
    </View>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: colors.white,
    paddingHorizontal: 24,
    paddingVertical: 26,
    marginTop: 24,
  },
});
