import React, {useEffect, useState} from 'react';
import {
  FlatList,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
} from 'react-native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {SceneMap, TabBar, TabView} from 'react-native-tab-view';
import {colors, fonts} from '../../../utils';
import {ItemListFood} from '../../molecules';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {AppDispatch, RootState} from '../../../store';
import {getFoodsByTypes} from '../../../store/reducers/homeSlice';

type RootStackParamList = {
  FoodDetail: undefined;
};

const NewTaste = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const dispatch = useDispatch<AppDispatch>();
  const {newTaste}: any = useSelector((state: RootState) => state.home);

  useEffect(() => {
    dispatch(getFoodsByTypes('new'));
  }, [dispatch]);

  return (
    <View style={styles.container}>
      <FlatList
        scrollEnabled={false}
        data={newTaste.data}
        keyExtractor={(item: any) => item.id.toString()}
        renderItem={({item}) => (
          <ItemListFood
            type="product"
            rate={item.rate}
            name={item.name}
            price={item.price_format}
            image={item.picture_url}
            onPress={() => navigation.navigate('FoodDetail', item)}
          />
        )}
      />
    </View>
  );
};

const Popular = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const dispatch = useDispatch<AppDispatch>();
  const {popular}: any = useSelector((state: RootState) => state.home);

  useEffect(() => {
    dispatch(getFoodsByTypes('popular'));
  }, [dispatch]);

  return (
    <View style={styles.container}>
      <FlatList
        scrollEnabled={false}
        data={popular.data}
        keyExtractor={(item: any) => item.id.toString()}
        renderItem={({item}) => (
          <ItemListFood
            type="product"
            rate={item.rate}
            name={item.name}
            price={item.price_format}
            image={item.picture_url}
            onPress={() => navigation.navigate('FoodDetail', item)}
          />
        )}
      />
    </View>
  );
};

const Recommended = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const dispatch = useDispatch<AppDispatch>();
  const {recommended}: any = useSelector((state: RootState) => state.home);

  useEffect(() => {
    dispatch(getFoodsByTypes('recommended'));
  }, [dispatch]);

  return (
    <View style={styles.container}>
      <FlatList
        scrollEnabled={false}
        data={recommended.data}
        keyExtractor={(item: any) => item.id.toString()}
        renderItem={({item}) => (
          <ItemListFood
            type="product"
            rate={item.rate}
            name={item.name}
            price={item.price_format}
            image={item.picture_url}
            onPress={() => navigation.navigate('FoodDetail', item)}
          />
        )}
      />
    </View>
  );
};

const renderScene = SceneMap({
  1: NewTaste,
  2: Popular,
  3: Recommended,
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

const HomeTabSection = () => {
  const layout = useWindowDimensions();
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    {key: 1, title: 'New Taste'},
    {key: 2, title: 'Popular'},
    {key: 3, title: 'Recommended'},
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

export default HomeTabSection;

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
