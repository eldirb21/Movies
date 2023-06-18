import {
  View,
  Text,
  TouchableOpacity,
  Linking,
  StyleSheet,
  Image,
  Dimensions,
} from 'react-native';
import React from 'react';
import AText from '../atoms/a-text';
import Aicon from '../atoms/a-icon';
import Func from '../../utils/func';
import {useTheme} from '../../utils/themes/theme-provider';
import {useTranslation} from 'react-i18next';
import Config from 'react-native-config';
const {width} = Dimensions.get('window');
export default function AcardItem(props) {
  const {t} = useTranslation();
  const {colors} = useTheme();
  const {source, vote, title, release_date} = props;
  console.log(vote);
  return (
    <TouchableOpacity activeOpacity={0.8} style={styles.card_item} {...props}>
      <Image
        resizeMode="contain"
        style={styles.logo}
        source={{uri: Config.IMG_URL + source}}
      />
      <View style={styles.rates}>
        <AText style={styles.rate_label}>{vote}</AText>
      </View>
      <View>
        <AText
          numberOfLines={2}
          style={[styles.fontBold, {color: colors.text}]}>
          {title}
        </AText>
        <AText style={{color: colors.text}}>{release_date}</AText>
      </View>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  card_item: {
    width: width / 3 - 10,
    margin: 3,
    marginBottom: 15,
  },
  logo: {
    height: 170,
    width: '100%',
    borderRadius: 10,
  },
  rates: {
    position: 'absolute',
    backgroundColor: '#121212',
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 20,
    top: 0,
    right: 0,
    padding: 4,
    width: 40,
    alignItems: 'center',
  },
  rate_label: {
    textAlign: 'center',
    color: '#FFF',
  },
  fontBold: {
    fontWeight: '600',
    fontSize: 14,
  },
});
