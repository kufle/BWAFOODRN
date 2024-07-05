import {
  FlatList,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {SceneMap, TabBar, TabView} from 'react-native-tab-view';
import {colors, fonts} from '../../../utils';
import ItemListFood from '../ItemListFood';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {useSelector} from 'react-redux';
import {RootState} from '../../../store';

type RootStackParamList = {
  OrderDetail: undefined;
};

const InProgress = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const {inProgress}: any = useSelector((state: RootState) => state.order);
  //console.log(inProgress.data);
  return (
    <View style={styles.container}>
      <FlatList
        data={inProgress.data}
        keyExtractor={(item: any) => item.id.toString()}
        showsVerticalScrollIndicator={false}
        renderItem={({item}) => (
          <ItemListFood
            type="in-progress"
            name={item.food.name}
            price={item.total_format}
            image={item.food.picture_url}
            items={item.quantity}
            onPress={() => navigation.navigate('OrderDetail', item)}
          />
        )}
      />
    </View>
  );
};

const PastOrders = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const {pastOrders}: any = useSelector((state: RootState) => state.order);
  return (
    <View style={styles.container}>
      <FlatList
        data={pastOrders.data}
        keyExtractor={(item: any) => item.id.toString()}
        showsVerticalScrollIndicator={false}
        renderItem={({item}) => (
          <ItemListFood
            type="past-orders"
            name={item.food.name}
            price={item.total_format}
            image={item.food.picture_url}
            items={item.quantity}
            date={item.created_at}
            status={item.status}
            onPress={() => navigation.navigate('OrderDetail', item)}
          />
        )}
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
