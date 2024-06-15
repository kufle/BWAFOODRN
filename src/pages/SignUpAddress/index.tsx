import {ScrollView, StyleSheet, View} from 'react-native';
import React from 'react';
import {Header} from '../../components/molecules';
import {Button, Gap, Input, Select} from '../../components';
import {colors} from '../../utils';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

type RootStackParamList = {
  SuccessSignUp: undefined;
};

type Props = {
  navigation: NativeStackNavigationProp<RootStackParamList>;
};

const SignUpAddress = ({navigation}: Props) => {
  return (
    <View style={styles.pages}>
      <Header title="Address" description="Make sure it's valid" />
      <View style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Gap height={26} />
          <Input label="Phone Number" />
          <Gap height={16} />
          <Input label="Address" />
          <Gap height={16} />
          <Input label="House Number" />
          <Gap height={16} />
          <Select label="City" />
          <Gap height={24} />
          <Button
            label="Sign Up Now"
            onPress={() => navigation.replace('SuccessSignUp')}
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
