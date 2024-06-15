import {Text, TextStyle, TouchableOpacity} from 'react-native';
import React from 'react';
import {fonts} from '../../../utils';

type TextAlign = 'left' | 'auto' | 'right' | 'center' | 'justify';

type Props = {
  label: string;
  align?: TextAlign;
  fontSize: number;
  onPress?: () => void;
};

const Link = ({label, align, fontSize, onPress}: Props) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text style={styles.text(align, fontSize)}>{label}</Text>
    </TouchableOpacity>
  );
};

export default Link;

const styles = {
  text: (align: TextAlign = 'left', fontSize: number): TextStyle => ({
    textDecorationLine: 'underline',
    fontFamily: fonts.primary.regular,
    textAlign: align,
    fontSize: fontSize,
  }),
};
