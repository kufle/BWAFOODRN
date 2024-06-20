import {StyleSheet, Text, useWindowDimensions, View} from 'react-native';
import React, {useState} from 'react';
import {SceneMap, TabBar, TabView} from 'react-native-tab-view';
import {colors, fonts} from '../../../utils';
import ItemListFood from '../ItemListFood';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

type RootStackParamList = {
  OrderDetail: undefined;
};

const InProgress = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  return (
    <View style={styles.container}>
      <ItemListFood
        type="in-progress"
        rating={5}
        onPress={() => navigation.navigate('OrderDetail')}
        items={4}
        price="2000"
      />
      <ItemListFood
        type="in-progress"
        rating={5}
        onPress={() => navigation.navigate('OrderDetail')}
        items={4}
        price="2000"
      />
      <ItemListFood
        type="in-progress"
        rating={5}
        onPress={() => navigation.navigate('OrderDetail')}
        items={4}
        price="2000"
      />
      <ItemListFood
        type="in-progress"
        rating={5}
        onPress={() => navigation.navigate('OrderDetail')}
        items={4}
        price="2000"
      />
      <ItemListFood
        type="in-progress"
        rating={5}
        onPress={() => navigation.navigate('OrderDetail')}
        items={4}
        price="2000"
      />
    </View>
  );
};

const PastOrders = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  return (
    <View style={styles.container}>
      <ItemListFood
        type="past-orders"
        rating={5}
        onPress={() => navigation.navigate('OrderDetail')}
        items={4}
        price="2000"
      />
      <ItemListFood
        type="past-orders"
        rating={5}
        onPress={() => navigation.navigate('OrderDetail')}
        items={4}
        price="2000"
      />
      <ItemListFood
        type="past-orders"
        rating={5}
        onPress={() => navigation.navigate('OrderDetail')}
        items={4}
        price="2000"
      />
      <ItemListFood
        type="past-orders"
        rating={5}
        onPress={() => navigation.navigate('OrderDetail')}
        items={4}
        price="2000"
      />
      <ItemListFood
        type="past-orders"
        rating={5}
        onPress={() => navigation.navigate('OrderDetail')}
        items={4}
        price="2000"
      />
    </View>
  );
};

const renderScene = SceneMap({
  1: InProgress,
  2: PastOrders,
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

const OrderTabSection = () => {
  const layout = useWindowDimensions();
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    {key: 1, title: 'In Progress'},
    {key: 2, title: 'Past Orders'},
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

export default OrderTabSection;

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
