import {
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {RouteProp} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {FoodDummy1, IcBackWhite} from '../../assets';
import {Counter, StarRating} from '../../components/molecules';
import {Button, Gap} from '../../components';
import {colors, fonts, formatNumber, getData} from '../../utils';

type RootStackParamList = {
  OrderSummary: undefined;
};

type Props = {
  navigation: NativeStackNavigationProp<RootStackParamList>;
  route: RouteProp<RootStackParamList>;
};

const FoodDetail = ({navigation, route}: Props) => {
  const {id, name, rate, description, ingredients, price, picture_url}: any =
    route.params;
  const [counter, setCounter] = useState(1);
  const [profile, setProfile] = useState({});

  useEffect(() => {
    getData('user').then(res => setProfile(res));
  }, []);

  const onOrder = () => {
    const totalPrice = counter * price;
    const driver = 5000;
    const tax = (10 / 100) * totalPrice;
    const total = totalPrice + driver + tax;
    const data: any = {
      item: {
        id: id,
        name: name,
        price: price,
        picture_url: picture_url,
      },
      transaction: {
        totalItem: counter,
        totalPrice: totalPrice,
        driver: driver,
        tax: tax,
        total: total,
      },
      userProfile: profile,
    };

    navigation.navigate('OrderSummary', data);
  };

  return (
    <View style={styles.pages}>
      <ImageBackground
        source={picture_url ? {uri: picture_url} : FoodDummy1}
        style={styles.cover}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.back}
          activeOpacity={0.7}>
          <IcBackWhite />
        </TouchableOpacity>
      </ImageBackground>
      <View style={styles.detail}>
        <View style={styles.titleSection}>
          <View style={styles.titleContainer}>
            <View style={styles.titleWrapper}>
              <Text style={styles.title}>{name}</Text>
              <StarRating rate={rate} />
            </View>
            <Counter counter={counter} setCounter={setCounter} />
          </View>
          <ScrollView>
            <Text style={styles.description}>{description}</Text>
            <Gap height={16} />
            <Text style={styles.label}>Ingredients:</Text>
            <Text style={styles.description}>{ingredients}</Text>
          </ScrollView>
        </View>

        <View style={styles.orderContainer}>
          <View style={styles.priceContainer}>
            <Text style={styles.description}>Total Price</Text>
            <Text style={styles.totalPrice}>
              IDR {formatNumber(price * counter)}
            </Text>
          </View>
          <View style={styles.buttonContainer}>
            <Button label="Order Now" onPress={onOrder} />
          </View>
        </View>
      </View>
    </View>
  );
};

export default FoodDetail;

const styles = StyleSheet.create({
  pages: {
    flex: 1,
  },
  cover: {
    height: 330,
    resizeMode: 'cover',
    paddingTop: 26,
    paddingLeft: 22,
  },
  back: {
    backgroundColor: 'grey',
    opacity: 0.7,
    borderRadius: 999,
    width: 35,
    height: 35,
    justifyContent: 'center',
    alignItems: 'center',
  },
  detail: {
    backgroundColor: colors.white,
    flex: 1,
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    marginTop: -30,
    paddingTop: 26,
    paddingHorizontal: 16,
  },
  titleSection: {
    flex: 1,
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 14,
  },
  titleWrapper: {
    flexShrink: 1,
  },
  title: {
    fontSize: 16,
    fontFamily: fonts.primary.regular,
    color: colors.text.primary,
  },
  description: {
    fontSize: 14,
    fontFamily: fonts.primary.regular,
    color: colors.text.secondary,
  },
  label: {
    fontSize: 14,
    fontFamily: fonts.primary.regular,
    color: colors.text.primary,
  },
  orderContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 16,
  },
  priceContainer: {
    width: '50%',
  },
  buttonContainer: {
    width: '50%',
  },
  totalPrice: {
    fontSize: 18,
    fontFamily: fonts.primary.regular,
    color: colors.text.primary,
  },
});
