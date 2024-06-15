const baseColor = {
  primary: '#FFC700',
  black: '#020202',
  grey: '#8D92A3',
  grey2: '#F0F0F0',
  grey3: '#F2F2F2',
  white: '#ffffff',
  green: '#1ABC9C',
};

export const colors = {
  ...baseColor,
  text: {
    primary: baseColor.black,
    secondary: baseColor.grey,
  },
  button: {
    textPrimary: baseColor.black,
    backgroundPrimary: baseColor.primary,
    textSecondary: baseColor.white,
    backgroundSecondary: baseColor.grey,
  },
  border: baseColor.black,
};
