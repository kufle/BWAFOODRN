import {StyleSheet, Text, useWindowDimensions, View} from 'react-native';
import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {SceneMap, TabBar, TabView} from 'react-native-tab-view';
import {showMessage} from 'react-native-flash-message';
import {useDispatch} from 'react-redux';
import {colors, fonts} from '../../../utils';
import {ItemListMenu} from '../../molecules';
import {logoutUser} from '../../../store/reducers/authSlice';
import {AppDispatch} from '../../../store';

type RootStackParamList = {
  SignIn: undefined;
};

const Account = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const dispatch = useDispatch<AppDispatch>();
  const logout = async () => {
    try {
      await dispatch(logoutUser()).unwrap();
      navigation.reset({
        index: 0,
        routes: [{name: 'SignIn'}],
      });
    } catch (error: any) {
      let errMessage = '';
      errMessage += error.message + '\n';
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
      navigation.reset({
        index: 0,
        routes: [{name: 'SignIn'}],
      });
    }
  };
  return (
    <View style={styles.container}>
      <ItemListMenu text="Edit Profile" />
      <ItemListMenu text="Home Address" />
      <ItemListMenu text="Security" />
      <ItemListMenu text="Payments" />
      <ItemListMenu text="Sign Out" onPress={logout} />
    </View>
  );
};

const FoodMarket = () => {
  return (
    <View style={styles.container}>
      <ItemListMenu text="Rate App" />
      <ItemListMenu text="Help Center" />
      <ItemListMenu text="Privacy & Policy" />
      <ItemListMenu text="Term & Conditions" />
    </View>
  );
};

const renderScene = SceneMap({
  1: Account,
  2: FoodMarket,
});

const renderTabBar = (props: any) => {
  return (
    <TabBar
      {...props}
      indicatorStyle={{
        backgroundColor: colors.black,
      }}
      tabStyle={styles.tabStyle}
      style={styles.tabBar}
      renderLabel={({route, focused}) => (
        <Text
          style={{
            fontFamily: fonts.primary.medium,
            color: focused ? colors.text.primary : colors.text.secondary,
          }}>
          {route.title}
        </Text>
      )}
    />
  );
};

const ProfileTabSection = () => {
  const layout = useWindowDimensions();
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    {key: 1, title: 'Account'},
    {key: 2, title: 'FoodMarket'},
  ]);

  return (
    <TabView
      renderTabBar={renderTabBar}
      navigationState={{index, routes}}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{width: layout.width}}
    />
  );
};

export default ProfileTabSection;

const styles = StyleSheet.create({
  container: {
    paddingTop: 8,
    backgroundColor: colors.white,
    paddingHorizontal: 24,
  },
  tabBar: {
    backgroundColor: colors.white,
    elevation: 0,
    shadowOpacity: 0,
    borderBottomWidth: 1,
    borderBottomColor: colors.grey3,
  },
  tabStyle: {
    width: 'auto',
  },
});
