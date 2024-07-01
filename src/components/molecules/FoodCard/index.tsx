import {Image, ImageProps, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {colors, fonts} from '../../../utils';
import {StarRating} from '../../molecules';
import {FoodDummy1} from '../../../assets';

type Props = {
  name?: string;
  rate: string;
  image?: ImageProps;
};

const FoodCard = ({name, image, rate}: Props) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={image ? {uri: image} : FoodDummy1} />
      <View style={styles.detail}>
        <Text style={styles.text}>{name}</Text>
        <StarRating rate={rate} />
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
    marginHorizontal: 12,
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
