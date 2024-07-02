import {FlatList, ScrollView, StyleSheet, View} from 'react-native';
import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {
  FoodCard,
  HomeProfile,
  HomeTabSection,
} from '../../components/molecules';
import {AppDispatch, RootState} from '../../store';
import {getFoods} from '../../store/reducers/homeSlice';

type RootStackParamList = {
  FoodDetail: undefined;
};

interface Props {
  navigation: NativeStackNavigationProp<RootStackParamList>;
}

const Home = ({navigation}: Props) => {
  const dispatch = useDispatch<AppDispatch>();
  const {foods}: any = useSelector((state: RootState) => state.home);

  useEffect(() => {
    dispatch(getFoods());
  }, [dispatch]);

  return (
    <View style={styles.pages}>
      <ScrollView>
        <View>
          <HomeProfile />
          <FlatList
            showsHorizontalScrollIndicator={false}
            horizontal={true}
            contentContainerStyle={styles.foodlist}
            data={foods.data}
            keyExtractor={(item: any) => item.id.toString()}
            renderItem={({item}) => (
              <View style={styles.foodContainer}>
                <FoodCard
                  name={item.name}
                  image={item.picture_url}
                  rate={item.rate}
                  onPress={() => navigation.navigate('FoodDetail', item)}
                />
              </View>
            )}
          />
        </View>
        <View style={styles.tabContainer}>
          <HomeTabSection />
        </View>
      </ScrollView>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  pages: {
    flex: 1,
  },
  foodlist: {
    paddingHorizontal: 12,
  },
  foodContainer: {
    flexDirection: 'row',
    marginVertical: 12,
  },
  tabContainer: {
    flex: 1,
  },
});
