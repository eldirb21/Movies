import {
  View,
  Text,
  TouchableOpacity,
  Linking,
  StyleSheet,
  Image,
} from 'react-native';
import React from 'react';
import AText from '../atoms/a-text';
import Aicon from '../atoms/a-icon';
import Func from '../../utils/func';
import {useTheme} from '../../utils/themes/theme-provider';
import {useTranslation} from 'react-i18next';
import Config from 'react-native-config';

export default function AcardItem(props) {
  const {t} = useTranslation();
  const {colors} = useTheme();
  const {source, vote, title, release_date} = props;
  return (
    <TouchableOpacity activeOpacity={0.8} style={styles.card_item} {...props}>
      <Image
        resizeMode="cover"
        style={styles.logo}
        source={{uri: Config.IMG_URL + source}}
      />
      <View style={styles.rates}>
        <AText style={styles.rate_label}>{vote}</AText>
      </View>
      <View>
        <AText style={[styles.fontBold, {color: colors.text}]}>{title}</AText>
        <AText style={{color: colors.text}}>{release_date}</AText>
      </View>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  card_item: {
    width: '32%',
    marginBottom: 10,
    marginHorizontal: 2,
  },
  logo: {
    height: 170,
    width: '100%',
  },
  rates: {
    position: 'absolute',
    opacity: 0.9,
    backgroundColor: 'hsl(202, 0%, 99%)',
    borderRadius: 100,
    top: 5,
    right: 5,
    padding: 4,
  },
  rate_label: {
    height: 16,
    width: 16,
    textAlign: 'center',
    color: '#000',
  },
  fontBold: {
    fontWeight: '600',
  },
});
