import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {StarRating} from '../../molecules';
import {colors, fonts} from '../../../utils';
import {FoodDummy1} from '../../../assets';

type Props = {
  onPress?: () => void;
  rating?: number;
  items?: number;
};

const Food = ({rating, items}: Props) => {
  return (
    <View style={styles.foodContainer}>
      <Image style={styles.image} source={FoodDummy1} />
      <View style={styles.textContainer}>
        <Text style={styles.productName}>Bubur Mang</Text>
        <Text style={styles.productPrice}>IDR 10.000</Text>
      </View>
      {items && <Text style={styles.itemText}>{items} items</Text>}
      {rating && <StarRating />}
    </View>
  );
};

const ItemListFood = ({onPress, rating, items}: Props) => {
  if (onPress) {
    return (
      <TouchableOpacity onPress={onPress}>
        <Food rating={rating} items={items} />
      </TouchableOpacity>
    );
  } else {
    return (
      <View>
        <Food rating={rating} items={items} />
      </View>
    );
  }
};

export default ItemListFood;

const styles = StyleSheet.create({
  foodContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.white,
    paddingVertical: 8,
  },
  image: {
    height: 60,
    width: 60,
    borderRadius: 8,
    overflow: 'hidden',
  },
  textContainer: {
    flex: 1,
    marginLeft: 12,
  },
  productName: {
    fontSize: 16,
    fontFamily: fonts.primary.medium,
    color: colors.text.primary,
  },
  productPrice: {
    fontSize: 13,
    fontFamily: fonts.primary.regular,
    color: colors.text.secondary,
  },
  itemText: {
    fontFamily: fonts.primary.regular,
    color: colors.text.secondary,
    fontSize: 13,
  },
});
