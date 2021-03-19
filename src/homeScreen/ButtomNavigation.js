import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {
  IconHome,
  IconHomeActive,
  IconJadwal,
  IconJadwalActive,
  IconUser,
  IconUserActive,
} from '../assest';

const ButtomNavigation = ({state, descriptors, navigation, label}) => {
  const Icon = () => {
    if (label === 'Akun') {
      return isFocused ? <IconHomeActive /> : <IconHome />;
    }

    if (label === 'Message') {
      return isFocused ? <IconJadwalActive /> : <IconJadwal />;
    }

    if (label === 'Survey') {
      return isFocused ? <IconUserActive /> : <IconUser />;
    }

    return <IconUserActive />;
  };

  const focusedOptions = descriptors[state.routes[state.index].key].options;
  if (focusedOptions.tabBarVisible === false) {
    return null;
  }

  return (
    <View style={styles.container}>
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
            navigation.navigate(route.name);
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
            onPress={onPress}
            onLongPress={onLongPress}
            style={styles.containerdua}>
            <Icon />
            <Text style={styles.text(isFocused)}>{label}</Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default ButtomNavigation;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    justifyContent: 'space-between',
    paddingHorizontal: 55,
    paddingVertical: 14,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  containerdua: {
    alignItems: 'center',
  },
  text: isFocused => ({
    fontSize: 13,
    color: isFocused ? '#55CB95' : '#C8C8C8',
    marginTop: 8,
  }),
});
