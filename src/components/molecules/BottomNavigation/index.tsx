import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {BottomTabBarProps} from '@react-navigation/bottom-tabs';
import {
  IcHomeOff,
  IcHomeOn,
  IcOrderOff,
  IcOrderOn,
  IcProfileOff,
  IcProfileOn,
} from '../../../assets';
import {colors, fonts} from '../../../utils';

type IconType = {
  label: string;
  active: boolean;
};

const Icon = ({label, active}: IconType) => {
  switch (label) {
    case 'Home':
      return active ? <IcHomeOn /> : <IcHomeOff />;
    case 'Order':
      return active ? <IcOrderOn /> : <IcOrderOff />;
    case 'Profile':
      return active ? <IcProfileOn /> : <IcProfileOff />;
    default:
      return <IcHomeOn />;
  }
};

const BottomNavigation: React.FC<BottomTabBarProps> = ({
  state,
  descriptors,
  navigation,
}) => {
  return (
    <View style={styles.pages}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            key={index}
            accessibilityRole="button"
            accessibilityState={isFocused ? {selected: true} : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            activeOpacity={0.6}
            onPress={onPress}
            onLongPress={onLongPress}>
            <View style={styles.icon}>
              <Icon label={label as string} active={isFocused} />
              <Text style={styles.text}>{label as string}</Text>
            </View>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default BottomNavigation;

const styles = StyleSheet.create({
  pages: {
    backgroundColor: colors.white,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderTopWidth: 1,
    borderTopColor: colors.grey2,
  },
  icon: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    paddingTop: 2,
    fontSize: 14,
    fontFamily: fonts.primary.light,
    color: colors.text.secondary,
  },
});
