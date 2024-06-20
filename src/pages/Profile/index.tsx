import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {colors, fonts} from '../../utils';
import {ProfileTabSection} from '../../components/molecules';

const Profile = () => {
  return (
    <View style={styles.pages}>
      <View style={styles.profile}>
        <View style={styles.photoContainer}>
          <View style={styles.photoWrapper}>
            <View style={styles.photo}>
              <Text style={styles.photoText}>Add Photo</Text>
            </View>
          </View>
        </View>
        <Text style={styles.name}>Irawan</Text>
        <Text style={styles.email}>irawan@mail.com</Text>
      </View>
      <View style={styles.content}>
        <ProfileTabSection />
      </View>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  pages: {
    flex: 1,
  },
  profile: {
    backgroundColor: colors.white,
    paddingBottom: 26,
    paddingTop: 26,
  },
  photoContainer: {
    alignItems: 'center',
    marginBottom: 16,
  },
  photoWrapper: {
    borderWidth: 1,
    borderColor: colors.grey,
    borderStyle: 'dashed',
    height: 110,
    width: 110,
    borderRadius: 110,
    alignItems: 'center',
    justifyContent: 'center',
  },
  photo: {
    width: 90,
    height: 90,
    borderRadius: 90,
    backgroundColor: colors.grey2,
    padding: 24,
  },
  photoText: {
    color: colors.grey,
    fontSize: 14,
    textAlign: 'center',
  },
  name: {
    fontSize: 18,
    fontFamily: fonts.primary.medium,
    color: colors.text.primary,
    textAlign: 'center',
  },
  email: {
    fontSize: 14,
    fontFamily: fonts.primary.light,
    color: colors.text.secondary,
    textAlign: 'center',
  },
  content: {
    flex: 1,
    marginTop: 24,
    backgroundColor: colors.white,
  },
});
