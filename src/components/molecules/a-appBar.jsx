import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {useTheme} from '../../utils/themes/theme-provider';
import AText from '../atoms/a-text';
import Aicon from '../atoms/a-icon';

export default function AappBar(props) {
  const {title, textColor, logos, onBack} = props;
  const {colors} = useTheme();
  const renderLeft = () => {
    var styled = [
      styles.logos,
      {color: textColor ? textColor : colors.activeColor}, //colors.textInActive
    ];
    return (
      <View style={styles.renders}>
        {logos && (
          <AText style={styled}>
            The
            {'\n'}Movies
          </AText>
        )}
        {onBack && (
          <TouchableOpacity
            onPress={onBack}
            activeOpacity={0.8}
            style={styles.back_btn}
          >
            <Aicon
              size={20}
              name="arrow-back-ios"
              color={textColor ? textColor : colors.activeColor}
            />
          </TouchableOpacity>
        )}
      </View>
    );
  };
  const renderCenter = () => {
    var styled = [
      styles.center_item_text,
      {color: textColor ? textColor : colors.activeColor},
    ];
    return (
      <View style={styles.center_item}>
        <AText style={styled}>{title ? title : ''}</AText>
      </View>
    );
  };
  const renderRight = () => {
    var styled = [
      styles.center_item_text,
      {color: textColor ? textColor : colors.textInActive},
    ];
    return (
      <View style={[styles.renders, styles.right]}>
        {/* <AText style={styled}>{title ? title : ''}</AText> */}
      </View>
    );
  };

  var styled = [
    styles.container,
    {
      borderBottomWidth: props.bordered ? 1 : 0,
      borderColor: colors.borderLight,
      backgroundColor: colors.activeBg,
    },
  ];

  return (
    <View style={styled}>
      {renderLeft()}
      {renderCenter()}
      {renderRight()}
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    height: 55,
  },
  renders: {
    flex: 1,
    height: '100%',
    justifyContent: 'center',
  },
  right: {
    alignItems: 'flex-end',
  },
  logos: {
    fontSize: 18,
    color: 'hsl(0, 0%, 80%)',
    fontWeight: '900',
    textTransform: 'uppercase',
  },
  center_item: {
    flex: 1,
    alignItems: 'center',
  },
  center_item_text: {
    fontSize: 16,
    justifyContent: 'center',
    alignItems: 'center',
    textTransform: 'uppercase',
  },
  back_btn: {
    width: 35,
    height: 35,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
