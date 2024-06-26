import {Image, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {ProfileDummy} from '../../../assets';
import {colors, fonts, getData} from '../../../utils';

const HomeProfile = () => {
  const [user, setUser] = useState<any>({});

  useEffect(() => {
    getData('user').then((res: any) => {
      setUser(res);
    });
  }, []);

  return (
    <View style={styles.header}>
      <View>
        <Text style={styles.title}>FoodMarket</Text>
        <Text style={styles.subTitle}>Let's get some foods</Text>
      </View>
      <Image
        style={styles.image}
        source={user.photoProfile ? {uri: user.photoProfile} : ProfileDummy}
      />
    </View>
  );
};

export default HomeProfile;

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 24,
    paddingTop: 32,
    paddingBottom: 24,
    backgroundColor: colors.white,
  },
  title: {
    fontSize: 22,
    fontFamily: fonts.primary.medium,
    color: colors.text.primary,
  },
  subTitle: {
    fontSize: 14,
    fontFamily: fonts.primary.regular,
    color: colors.text.secondary,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 8,
  },
});
