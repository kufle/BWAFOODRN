import {ScrollView, StyleSheet, View} from 'react-native';
import React from 'react';
import {Header} from '../../components/molecules';
import {Button, Gap, Input, Select} from '../../components';
import {colors} from '../../utils';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {useForm} from '../../hooks';
import {useDispatch, useSelector} from 'react-redux';
import {setRegisterForm} from '../../store/reducers/registerFormSlice';
import {registerUser} from '../../store/reducers/authSlice';
import {AppDispatch, RootState} from '../../store';
import {showMessage} from 'react-native-flash-message';

type RootStackParamList = {
  SuccessSignUp: undefined;
};

type Props = {
  navigation: NativeStackNavigationProp<RootStackParamList>;
};

const SignUpAddress = ({navigation}: Props) => {
  const [form, setForm] = useForm({
    phone_number: '',
    address: '',
    house_number: '',
    city: '',
  });

  const dispatch = useDispatch<AppDispatch>();
  const registerFormReducer = useSelector(
    (state: RootState) => state.registerForm,
  );

  const onContinue = async () => {
    try {
      dispatch(setRegisterForm(form));

      const data = {
        ...form,
        ...registerFormReducer.registerForm,
        photoForm: {...registerFormReducer.photoForm},
      };
      await dispatch(registerUser(data)).unwrap();
      navigation.reset({
        index: 0,
        routes: [{name: 'SuccessSignUp'}],
      });
    } catch (error: any) {
      let errMessage = '';
      if (error?.errors) {
        const errors = error.errors;
        Object.keys(errors).map(key => {
          errMessage += errors[key][0] + '\n';
        });
      }
      showMessage({
        message: errMessage,
        type: 'danger',
      });
    }
  };

  return (
    <View style={styles.pages}>
      <Header title="Address" description="Make sure it's valid" />
      <View style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Gap height={26} />
          <Input
            label="Phone Number"
            value={form.phone_number}
            onChangeText={val => setForm('phone_number', val)}
          />
          <Gap height={16} />
          <Input
            label="Address"
            value={form.address}
            onChangeText={val => setForm('address', val)}
          />
          <Gap height={16} />
          <Input
            label="House Number"
            value={form.house_number}
            onChangeText={val => setForm('house_number', val)}
          />
          <Gap height={16} />
          <Select
            label="City"
            selectedValue={form.city}
            onValueChange={val => setForm('city', val)}
          />

          <Gap height={24} />
          <Button
            label="Sign Up Now"
            //onPress={() => navigation.replace('SuccessSignUp')}
            onPress={onContinue}
          />

          <Gap height={24} />
        </ScrollView>
      </View>
    </View>
  );
};

export default SignUpAddress;

const styles = StyleSheet.create({
  pages: {
    flex: 1,
  },
  container: {
    flex: 1,
    marginTop: 24,
    paddingHorizontal: 24,
    backgroundColor: colors.white,
  },
});
