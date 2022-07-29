import {View, Text, StyleSheet, Pressable, Switch} from 'react-native';
import React, {useState} from 'react';
import AText from './a-text';
import {useTheme} from '../../utils/themes/theme-provider';

export default function AmodeTheme() {
  const {setScheme, isDark, colors} = useTheme();
  const toggleScheme = () => {
    isDark ? setScheme('light') : setScheme('dark');
  };
  return (
    <Pressable style={styles.btn} onPress={toggleScheme}>
      <AText style={[styles.text, {color: colors.textGrey}]}>
        {isDark ? 'Dark' : 'Light'}
      </AText>
      <Switch
        value={isDark}
        thumbColor={colors.textGrey}
        trackColor={colors.textGrey}
        onValueChange={toggleScheme}
      />
    </Pressable>
  );
}
const styles = StyleSheet.create({
  btn: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: -15,
    padding: 8,
  },
  text: {
    marginRight: 5,
  },
});
