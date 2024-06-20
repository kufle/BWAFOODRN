import {Text, TextStyle, TouchableOpacity} from 'react-native';
import React from 'react';
import {colors, fonts} from '../../../utils';

type Variant = 'primary' | 'secondary' | 'danger';

type Props = {
  label: string;
  onPress?: () => void;
  variant?: Variant;
};

const buttonType = (type: string) => {
  switch (type) {
    case 'primary':
      return {
        background: colors.button.backgroundPrimary,
        color: colors.button.textPrimary,
      };
    case 'secondary':
      return {
        background: colors.button.backgroundSecondary,
        color: colors.button.textSecondary,
      };
    case 'danger':
      return {
        background: colors.button.backgroundDanger,
        color: colors.button.textDanger,
      };
    default:
      return {
        background: colors.button.backgroundPrimary,
        color: colors.button.textPrimary,
      };
  }
};

const Button = ({label, onPress, variant = 'primary'}: Props) => {
  return (
    <TouchableOpacity
      style={styles.container(variant)}
      onPress={onPress}
      activeOpacity={0.6}>
      <Text style={styles.text(variant)}>{label}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = {
  container: (variant: Variant): TextStyle => ({
    backgroundColor: buttonType(variant)?.background,
    borderRadius: 8,
    padding: 12,
  }),
  text: (variant: Variant): TextStyle => ({
    fontSize: 14,
    fontFamily: fonts.primary.medium,
    color: buttonType(variant)?.color,
    textAlign: 'center',
  }),
};
