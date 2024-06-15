import {Text, TextStyle, TouchableOpacity} from 'react-native';
import React from 'react';
import {colors, fonts} from '../../../utils';

type Props = {
  label: string;
  onPress?: () => void;
  secondary?: boolean;
};

const Button = ({label, onPress, secondary}: Props) => {
  return (
    <TouchableOpacity
      style={styles.container(secondary)}
      onPress={onPress}
      activeOpacity={0.6}>
      <Text style={styles.text(secondary)}>{label}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = {
  container: (secondary: boolean | undefined): TextStyle => ({
    backgroundColor: secondary
      ? colors.button.backgroundSecondary
      : colors.button.backgroundPrimary,
    borderRadius: 8,
    padding: 12,
  }),
  text: (secondary: boolean | undefined): TextStyle => ({
    fontSize: 14,
    fontFamily: fonts.primary.medium,
    color: secondary ? colors.button.textSecondary : colors.button.textPrimary,
    textAlign: 'center',
  }),
};
