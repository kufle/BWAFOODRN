export const formatNumber = (val: number = 0) => {
  return new Intl.NumberFormat('us-US').format(val);
};
