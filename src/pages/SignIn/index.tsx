import {StyleSheet, View} from 'react-native';
import React from 'react';
import {Header} from '../../components/molecules';
import {Button, Gap, Input, Link} from '../../components';
import {colors} from '../../utils';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {useForm} from '../../hooks';
import axios from 'axios';

type RootStackParamList = {
  SignUp: undefined;
};

type Props = {
  navigation: NativeStackNavigationProp<RootStackParamList>;
};

const SignIn = ({navigation}: Props) => {
  const [form, setForm] = useForm({
    email: '',
    password: '',
  });

  const onSubmit = () => {
    console.log(form);
    axios
      .post('https://food.kame.my.id/api/auth/login', form)
      .then(res => {
        console.log(res);
      })
      .catch(e => {
        console.log(e);
      });
    //console.log(email, password);
  };

  return (
    <View style={styles.page}>
      <Header title="Sign In" description="Find your best ever meal" />
      <View style={styles.container}>
        <Input
          label="Email Address"
          value={form.email}
          onChangeText={(val: string) => setForm('email', val)}
        />
        <Gap height={16} />
        <Input
          label="Password"
          value={form.password}
          onChangeText={(val: string) => setForm('password', val)}
          secureTextEntry
        />
        <Gap height={24} />
        <Button label="Login" onPress={onSubmit} />
        <Gap height={24} />
        <Link
          label="Already have an account ? Sign Up"
          align="center"
          fontSize={14}
          onPress={() => navigation.navigate('SignUp')}
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
