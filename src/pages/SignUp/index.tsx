import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Header} from '../../components/molecules';
import {Button, Gap, Input, Link} from '../../components';
import {colors} from '../../utils';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

type RootStackParamList = {
  SignIn: undefined;
  SignUpAddress: undefined;
};

type Props = {
  navigation: NativeStackNavigationProp<RootStackParamList>;
};

const SignUp = ({navigation}: Props) => {
  return (
    <View style={styles.pages}>
      <Header
        title="Sign Up"
        description="Register and eat"
        onPress={() => navigation.goBack()}
      />
      <View style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.photoContainer}>
            <View style={styles.photoWrapper}>
              <View style={styles.photo}>
                <Text style={styles.photoText}>Add Photo</Text>
              </View>
            </View>
          </View>
          <Input label="Full Name" />
          <Gap height={16} />
          <Input label="Email Address" />
          <Gap height={16} />
          <Input label="Password" />
          <Gap height={16} />
          <Input label="Password Confirmation" />
          <Gap height={24} />
          <Button
            label="Continue"
            onPress={() =>
              navigation.reset({
                index: 0,
                routes: [{name: 'SignUpAddress'}],
              })
            }
          />
          <Gap height={24} />
          <Link
            label="Already have an account? Sign In"
            fontSize={14}
            align="center"
            onPress={() => navigation.navigate('SignIn')}
          />
          <Gap height={26} />
        </ScrollView>
      </View>
    </View>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  pages: {
    flex: 1,
  },
  container: {
    flex: 1,
    paddingHorizontal: 24,
    backgroundColor: colors.white,
    marginTop: 24,
  },
  photoContainer: {
    alignItems: 'center',
    marginTop: 26,
    marginBottom: 16,
  },
  photoWrapper: {
    borderWidth: 1,
    borderColor: colors.grey,
    borderStyle: 'dashed',
    height: 110,
    width: 110,
    borderRadius: 110,
    alignItems: 'center',
    justifyContent: 'center',
  },
  photo: {
    width: 90,
    height: 90,
    borderRadius: 90,
    backgroundColor: colors.grey2,
    padding: 24,
  },
  photoText: {
    color: colors.grey,
    fontSize: 14,
    textAlign: 'center',
  },
});
