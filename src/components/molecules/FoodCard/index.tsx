import {Image, ImageProps, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {colors, fonts} from '../../../utils';
import {StarRating} from '../../molecules';

type Props = {
  image: ImageProps;
};

const FoodCard = ({image}: Props) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={image} />
      <View style={styles.detail}>
        <Text style={styles.text}>Cherry Healty</Text>
        <StarRating />
      </View>
    </View>
  );
};

export default FoodCard;

const styles = StyleSheet.create({
  container: {
    width: 200,
    backgroundColor: colors.white,
    borderRadius: 8,
    shadowColor: colors.black,
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.5,
    shadowRadius: 3,
    elevation: 3,
    overflow: 'hidden',
    marginRight: 24,
  },
  image: {
    resizeMode: 'cover',
    width: '100%',
    height: 140,
  },
  detail: {
    padding: 12,
  },
  text: {
    fontSize: 16,
    color: colors.text.primary,
    fontFamily: fonts.primary.regular,
  },
});
