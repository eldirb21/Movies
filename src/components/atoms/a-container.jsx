import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import {useIsFocused} from '@react-navigation/native';
import {useTheme} from '../../utils/themes/theme-provider';

export default function AContainer(props, style) {
  const {colors, isDark} = useTheme();
  var {bg, barStyle, children} = props;
  function FocusAwareStatusBar(props) {
    const isFocused = useIsFocused();
    return isFocused ? <StatusBar {...props} /> : null;
  }
  var styled = [
    style,
    {
      flex: 1,
      backgroundColor: colors.background,
    },
  ];
  return (
    <SafeAreaView style={styled}>
      <FocusAwareStatusBar barStyle={barStyle} backgroundColor={bg} />
      {children}
    </SafeAreaView>
  );
}
