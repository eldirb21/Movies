import React from 'react';
import {TextInput, View} from 'react-native';
import {useTheme} from '../../utils/themes/theme-provider';
import Aicon from './a-icon';
import AText from './a-text';

export default function AtextInput(props) {
	const {colors, isDark} = useTheme();
   const {
    label,
    error,
    containerStyle,
    labelStyle,
    textStyle,
    iconLeft,
    iconLeftType,
    borderColor,
  } = props;
  return (
    <View style={[containerStyle, {marginBottom: 10}]}>
      {label && (
        <AText style={[labelStyle, {color: '#9A9A9A', fontWeight: '500'}]}>
          {label}
        </AText>
      )}
      {iconLeft ? (
        <View
          style={{
            flexDirection: 'row',
            borderWidth: .8,
            borderRadius: 10,
            borderColor: borderColor ? borderColor :  colors.textActive,//'rgba(0,0,0,0.2)',
            width: '100%',
          }}
        >
          <Aicon
            name={iconLeft}
            style={{
              borderTopLeftRadius: 10,
              borderBottomLeftRadius: 10,
              backgroundColor: colors.textActive,//'#166b88',
              padding: 12,
							width:70,
              margin: -1,
              textAlign: 'center',
            }}
            type={iconLeftType}
            size={25}
            color= {colors.textInActive}//"#FFF"
          />
          <TextInput
            placeholder={label}
            placeholderTextColor={borderColor ? borderColor : colors.textGrey}
            style={[
              textStyle,
              {padding: 10, color: borderColor ? borderColor : colors.textGrey},
            ]}
            {...props}
          />
        </View>
      ) : (
        <TextInput
          placeholder={label}
          placeholderTextColor={borderColor ? borderColor : colors.textGrey}
          style={[
            textStyle,
            {
              color: borderColor ? borderColor : colors.textGrey,
              padding: 10,
              borderWidth: 1,
              borderRadius: 10,
              borderColor: borderColor ? borderColor :  colors.text//'rgba(0,0,0,0.2)',
            },
          ]}
          {...props}
        />
      )}
      {error != undefined && (
        <View>
          {error == '' || <AText style={{color: 'red'}}>{error}</AText>}
        </View>
      )}
    </View>
  );
}
