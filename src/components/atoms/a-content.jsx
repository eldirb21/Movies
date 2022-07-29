import React from 'react';
import {SafeAreaView, ScrollView, View} from 'react-native';
import { useTheme } from '../../utils/themes/theme-provider';

export default function AContent(props) {
	const {colors, isDark} = useTheme();
  var {bg, scroll, children, pd, ph, pv} = props;

  var styled = {
    flex: 1,
    display: 'flex',
    backgroundColor: bg,
  };

  return scroll ? (
    <ScrollView
      contentContainerStyle={{flexGrow: 1}}
      showsVerticalScrollIndicator={false}
      style={styled}
      {...props}>
      <View
        style={{
          flex: 1,
          marginBottom: 4,
          padding: pd ? 20 : 0,
        }}>
        {children}
      </View>
    </ScrollView>
  ) : (
    <SafeAreaView
      style={[
        styled,
        pd && {padding: 20},
        ph && {paddingHorizontal: 20},
        pv && {paddingVertical: 20},
      ]}
      {...props}>
      {children}
    </SafeAreaView>
  );
}
