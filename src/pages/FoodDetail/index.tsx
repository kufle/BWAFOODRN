import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {FoodDummy1, IcBackWhite} from '../../assets';
import {Counter, StarRating} from '../../components/molecules';
import {Button, Gap} from '../../components';
import {colors, fonts} from '../../utils';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

type RootStackParamList = {
  OrderSummary: undefined;
};

type Props = {
  navigation: NativeStackNavigationProp<RootStackParamList>;
};

const FoodDetail = ({navigation}: Props) => {
  return (
    <View style={styles.pages}>
      <ImageBackground source={FoodDummy1} style={styles.cover}>
        <TouchableOpacity style={styles.back} activeOpacity={0.7}>
          <IcBackWhite />
        </TouchableOpacity>
      </ImageBackground>
      <View style={styles.detail}>
        <View style={styles.titleSection}>
          <View style={styles.titleContainer}>
            <View>
              <Text style={styles.title}>Bubur Mang</Text>
              <StarRating />
            </View>
            <Counter />
          </View>
          <Text style={styles.description}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
            distinctio non, ducimus ex nostrum molestias dolorem nesciunt illo.
            Aspernatur maxime eveniet harum? Animi, corporis. Cupiditate soluta
            maxime sequi aliquid exercitationem.
          </Text>
          <Gap height={16} />
          <Text style={styles.label}>Ingredients:</Text>
          <Text style={styles.description}>Beras, Air, Kecap, Kacang</Text>
        </View>
        <View style={styles.orderContainer}>
          <View style={styles.priceContainer}>
            <Text style={styles.description}>Total Price</Text>
            <Text style={styles.totalPrice}>IDR 8.000</Text>
          </View>
          <View style={styles.buttonContainer}>
            <Button
              label="Order Now"
              onPress={() => navigation.navigate('OrderSummary')}
            />
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
    opacity: 0.8,
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
