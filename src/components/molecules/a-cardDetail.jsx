import {
  View,
  Text,
  TouchableOpacity,
  Linking,
  StyleSheet,
  Image,
  ImageBackground,
} from 'react-native';
import React from 'react';
import AText from '../atoms/a-text';
import Aicon from '../atoms/a-icon';
import Func from '../../utils/func';
import {useTheme} from '../../utils/themes/theme-provider';
import {useTranslation} from 'react-i18next';
import Config from 'react-native-config';

export default function AcardDetail(props) {
  const {t} = useTranslation();
  const {colors} = useTheme();
  const {
    sourcebg,
    listType,
    lists,
    label,
    source,
    vote,
    title,
    release_date,
    overview,
  } = props;
   return (
    <>
      {listType ? (
        <View style={styles.mb}>
          <AText style={styles.fonts}>{label}</AText>
          <View style={styles.card_list}>
            {lists &&
              lists.map((lan, index) => {
                return (
                  <View key={index} style={styles.genres}>
                    <AText style={{color: '#000'}}>
                      {lan[`${title}`].toString() || ''}
                    </AText>
                  </View>
                );
              })}
          </View>
        </View>
      ) : (
        <ImageBackground
          source={{uri: Config.IMG_URL + sourcebg}}
          blurRadius={2}
          resizeMode="cover"
          style={styles.container_bg}
        >
          <View style={styles.overlay} />
          <View style={styles.content_top}>
            <Image
              resizeMode="cover"
              style={styles.logo}
              // source={{uri:'https://image.tmdb.org/t/p/w185/wKiOkZTN9lUUUNZLmtnwubZYONg.jpg'}}
              source={{uri: Config.IMG_URL + source}}
            />

            <View style={styles.top_right}>
              <View style={styles.right_content}>
                <AText style={styles.title}>{title}</AText>
                <AText style={[styles.fonts, {color: '#FFF'}]}>
                  {release_date}
                </AText>
              </View>

              <View
                style={{
                  flexDirection: 'row',
                }}
              >
                <View style={styles.vote}>
                  <AText style={{color: '#000'}}>
                    {vote ? vote.toFixed(1) : vote}
                  </AText>
                </View>
                <AText style={styles.vote_label}>{t('common:USC')}</AText>
              </View>

              <AText style={styles.overview_label}>{t('common:OVE')}</AText>
              <AText style={styles.overview_desc}>{overview}</AText>
            </View>
          </View>
        </ImageBackground>
      )}
    </>
  );
}
const styles = StyleSheet.create({
  container_bg: {
    flex: 0.1,
  },
  overlay: {
    height: '100%',
    width: '100%',
    position: 'absolute',
    backgroundColor: 'rgba(0,0,0,0.20)',
    opacity: 0.6,
  },
  content_top: {
    flexDirection: 'row',
    padding: 10,
  },
  logo: {
    height: '100%',
    width: '35%',
    borderRadius: 10,
  },
  top_right: {
    marginLeft: 10,
    flex: 1,
  },
  right_content: {
    marginBottom: 8,
  },
  title: {
    color: '#FFF',
    fontSize: 20,
    fontWeight: '700',
  },
  fonts: {
    fontWeight: '700',
  },
  vote: {
    backgroundColor: '#FFF',
    width: 40,
    height: 40,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 6,
  },
  vote_label: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFF',
    textAlign: 'left',
    width: 70,
  },
  overview_label: {
    color: '#FFF',
    fontWeight: '600',
    fontSize: 18,
  },
  overview_desc: {
    color: '#FFF',
    fontWeight: '600',
  },
  content_bottom: {
    flexDirection: 'row',
    flex: 1,
    padding: 10,
  },
  bottom_left: {
    width: '60%',
  },
  bottom_right: {
    width: '40%',
  },
  mb: {
    marginBottom: 10,
  },
  card_list: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
  },
  genres: {
    backgroundColor: '#EFEFEF',
    padding: 5,
    paddingHorizontal: 8,
    margin: 2,
    alignItems: 'center',
    borderRadius: 10,
    marginBottom: 2,
  },
  countries: {
    backgroundColor: '#FFF',
    padding: 5,
    marginBottom: 2,
  },
});
