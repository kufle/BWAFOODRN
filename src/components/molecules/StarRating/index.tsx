import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {IcStarOff, IcStarOn} from '../../../assets';

interface Props {
  rate: string;
}

const renderStar = (rate: string) => {
  let star = [];
  for (let i = 1; i <= 5; i++) {
    if (i <= parseInt(rate, 10)) {
      star.push(<IcStarOn key={i} />);
    } else {
      star.push(<IcStarOff key={i} />);
    }
  }
  return star;
};

const StarRating = ({rate = '4.5'}: Props) => {
  return (
    <View style={styles.ratingContainer}>
      <View style={styles.starContainer}>{renderStar(rate)}</View>
      <Text style={styles.textRating}>{rate}</Text>
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
