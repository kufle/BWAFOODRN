import {ActivityIndicator, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {colors, fonts} from '../../../utils';

const Loading = () => {
  return (
    <View style={styles.pages}>
      <View style={styles.container}>
        <ActivityIndicator size="large" color={colors.primary} />
        <Text style={styles.text}>Loading...</Text>
      </View>
    </View>
  );
};

export default Loading;

const styles = StyleSheet.create({
  pages: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
  },
  container: {
    backgroundColor: colors.white,
    width: '100%',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  text: {
    marginTop: 12,
    fontFamily: fonts.primary.medium,
    fontSize: 16,
  },
});
