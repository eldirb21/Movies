import React from 'react';
import {Text} from 'react-native';
import {useTheme} from '../../utils/themes/theme-provider';

export default function AText(props) {
  const {colors, isDark} = useTheme();
  const defStyle = {
    fontSize: 14,
    color: colors.text,
  };
  const incStyle = Array.isArray(props.style) ? props.style : [props.style];

  return <Text {...props} style={[defStyle, ...incStyle]} />;
}
