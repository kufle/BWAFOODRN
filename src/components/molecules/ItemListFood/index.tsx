import {
  Image,
  ImageProps,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {StarRating} from '../../molecules';
import {colors, fonts} from '../../../utils';
import {FoodDummy1} from '../../../assets';

/*
TYPE:
1.Product
2.Order-summary
3.In Progress
4.Past Orders
*/
type TypePage = 'product' | 'order-summary' | 'in-progress' | 'past-orders';

type Props = {
  type: TypePage;
  name: string;
  onPress?: () => void;
  rate?: string;
  items?: number;
  price: string;
  image?: ImageProps;
};

const Food = ({type, name, rate = '0', items, price}: Props) => {
  switch (type) {
    case 'product':
      return (
        <>
          <View style={styles.textContainer}>
            <Text style={styles.productName}>{name}</Text>
            <Text style={styles.productPrice}>IDR {price}</Text>
          </View>
          <StarRating rate={rate} />
        </>
      );
    case 'order-summary':
      return (
        <>
          <View style={styles.textContainer}>
            <Text style={styles.productName}>{name}</Text>
            <Text style={styles.productPrice}>IDR {price}</Text>
          </View>
          <Text style={styles.itemText}>{items} items</Text>
        </>
      );
    case 'in-progress':
      return (
        <View style={styles.textContainer}>
          <Text style={styles.productName}>{name}</Text>
          <Text style={styles.productPrice}>
            {items} items . IDR {price}
          </Text>
        </View>
      );
    case 'past-orders':
      return (
        <>
          <View style={styles.textContainer}>
            <Text style={styles.productName}>{name}</Text>
            <Text style={styles.productPrice}>
              {items} items . IDR {price}
            </Text>
          </View>
          <View>
            <Text style={styles.date}>28 Maret 2023</Text>
            <Text style={styles.status}>Completed</Text>
          </View>
        </>
      );
    default:
      return (
        <>
          <View style={styles.textContainer}>
            <Text style={styles.productName}>{name}</Text>
            <Text style={styles.productPrice}>IDR {price}</Text>
          </View>
          <StarRating rate={rate} />
        </>
      );
  }
};

const ItemListFood = ({
  type,
  name,
  image,
  onPress,
  rate,
  items,
  price,
}: Props) => {
  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.7}>
      <View style={styles.foodContainer}>
        <Image
          style={styles.image}
          source={image ? {uri: image} : FoodDummy1}
        />
        <Food name={name} type={type} rate={rate} items={items} price={price} />
      </View>
    </TouchableOpacity>
  );
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
  date: {
    fontSize: 10,
    fontFamily: fonts.primary.regular,
    color: colors.text.secondary,
  },
  status: {
    fontSize: 10,
    fontFamily: fonts.primary.regular,
    color: colors.danger,
    textAlign: 'center',
  },
});
