import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {colors, fonts} from '../../../utils';
import {IcBack} from '../../../assets';

type Props = {
  title: string;
  description?: string;
  onPress?: () => void;
};

const Header = ({title, description, onPress}: Props) => {
  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        {onPress && (
          <TouchableOpacity
            style={styles.back}
            onPress={onPress}
            activeOpacity={0.6}>
            <IcBack />
          </TouchableOpacity>
        )}
        <View>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.description}>{description}</Text>
        </View>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    paddingHorizontal: 24,
    paddingVertical: 20,
  },
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  back: {
    marginRight: 16,
    padding: 16,
    marginLeft: -16,
  },
  title: {
    fontSize: 22,
    fontFamily: fonts.primary.medium,
    color: colors.text.primary,
  },
  description: {
    fontSize: 14,
    fontFamily: fonts.primary.light,
    color: colors.text.secondary,
  },
});
