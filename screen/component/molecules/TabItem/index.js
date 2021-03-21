import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {WARNA_UTAMA, WARNA_DISABLE} from '../../../utils/constant';
import {
  IconUser,
  IconUserActive,
  IconList,
  IconListActive,
  IconMesssage,
  IconMessageActive,
} from '../../../assest';

const TabItem = ({isFocused, onPress, onLongPress, label}) => {
  const Icon = () => {
    if (label === 'Akun') return isFocused ? <IconUser /> : <IconUserActive />;

    if (label === 'Message')
      return isFocused ? <IconMesssage /> : <IconMessageActive />;

    if (label === 'ListSurvey')
      return isFocused ? <IconList /> : <IconListActive />;

    return <IconHome />;
  };
  return (
    <TouchableOpacity
      onPress={onPress}
      onLongPress={onLongPress}
      style={styles.container}>
      <Icon />
      <Text style={styles.text(isFocused)}>{label}</Text>
    </TouchableOpacity>
  );
};

export default TabItem;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  text: isFocused => ({
    fontSize: 13,
    color: isFocused ? WARNA_UTAMA : WARNA_DISABLE,
    marginTop: 6,
  }),
});
