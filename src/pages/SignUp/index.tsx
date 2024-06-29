import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {Header} from '../../components/molecules';
import {Button, Gap, Input, Link} from '../../components';
import {colors} from '../../utils';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {useForm} from '../../hooks';
import {useDispatch} from 'react-redux';
import {
  setPhotoForm,
  setRegisterForm,
  setStatusUpload,
} from '../../store/reducers/registerFormSlice';
import {launchImageLibrary} from 'react-native-image-picker';
import {showMessage} from 'react-native-flash-message';

type RootStackParamList = {
  SignIn: undefined;
  SignUpAddress: undefined;
};

type Props = {
  navigation: NativeStackNavigationProp<RootStackParamList>;
};

const SignUp = ({navigation}: Props) => {
  const [photo, setPhoto] = useState('');
  const [form, setForm] = useForm({
    name: '',
    email: '',
    password: '',
    password_confirmation: '',
  });

  const dispatch = useDispatch();

  const onContinue = () => {
    dispatch(setRegisterForm(form));
    navigation.navigate('SignUpAddress');
  };

  const addPhoto = async () => {
    const result = await launchImageLibrary({
      mediaType: 'photo',
      quality: 0.5,
      maxHeight: 200,
      maxWidth: 200,
    });
    if (result.didCancel || result.errorMessage) {
      showMessage({
        message: 'You did not select the photo',
        type: 'danger',
      });
      return false;
    }

    if (result.assets && result.assets.length > 0) {
      const dataImage = {
        uri: result.assets[0].uri,
        type: result.assets[0].type,
        name: result.assets[0].fileName,
      };

      setPhoto(dataImage.uri!);
      dispatch(setPhotoForm(dataImage));
      dispatch(setStatusUpload(true));
    }
  };

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
            <TouchableOpacity onPress={addPhoto}>
              <View style={styles.photoWrapper}>
                {photo ? (
                  <Image source={{uri: photo}} style={styles.photo} />
                ) : (
                  <View style={styles.photo}>
                    <Text style={styles.photoText}>Add Photo</Text>
                  </View>
                )}
              </View>
            </TouchableOpacity>
          </View>
          <Input
            label="Full Name"
            value={form.name}
            onChangeText={val => setForm('name', val)}
          />
          <Gap height={16} />
          <Input
            label="Email Address"
            value={form.email}
            onChangeText={val => setForm('email', val)}
          />
          <Gap height={16} />
          <Input
            label="Password"
            value={form.password}
            onChangeText={val => setForm('password', val)}
            secureTextEntry
          />
          <Gap height={16} />
          <Input
            label="Password Confirmation"
            value={form.password_confirmation}
            onChangeText={val => setForm('password_confirmation', val)}
            secureTextEntry
          />
          <Gap height={24} />
          <Button label="Continue" onPress={onContinue} />
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
