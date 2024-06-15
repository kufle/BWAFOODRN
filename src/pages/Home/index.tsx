import {ScrollView, StyleSheet, View} from 'react-native';
import React from 'react';
import {FoodDummy1, FoodDummy2, FoodDummy3} from '../../assets';
import {Gap} from '../../components';
import {
  FoodCard,
  HomeProfile,
  HomeTabSection,
} from '../../components/molecules';

const Home = () => {
  return (
    <View style={styles.pages}>
      <ScrollView>
        <View>
          <HomeProfile />
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View style={styles.foodContainer}>
              <Gap width={24} />
              <FoodCard image={FoodDummy1} />
              <FoodCard image={FoodDummy2} />
              <FoodCard image={FoodDummy3} />
            </View>
          </ScrollView>
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
  foodContainer: {
    flexDirection: 'row',
    marginVertical: 12,
  },
  tabContainer: {
    flex: 1,
  },
});