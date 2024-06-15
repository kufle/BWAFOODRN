import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {IcStarOn} from '../../../assets';

const StarRating = () => {
  return (
    <View style={styles.ratingContainer}>
      <View style={styles.starContainer}>
        <IcStarOn />
        <IcStarOn />
        <IcStarOn />
        <IcStarOn />
        <IcStarOn />
      </View>
      <Text style={styles.textRating}>4.5</Text>
    </View>
  );
};

export default StarRating;

const styles = StyleSheet.create({
  starContainer: {
    flexDirection: 'row',
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textRating: {
    marginLeft: 7,
  },
});
