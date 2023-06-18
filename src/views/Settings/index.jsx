import {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';
import React, {useEffect, useState} from 'react';
import AContainer from '../../components/atoms/a-container';
import AappBar from '../../components/molecules/a-appBar';
import {useTranslation} from 'react-i18next';
import AContent from '../../components/atoms/a-content';
import {useTheme} from '../../utils/themes/theme-provider';
import Aicon from '../../components/atoms/a-icon';
import AText from '../../components/atoms/a-text';
import AlanguageSelector from '../../components/atoms/a-languageSelector';
import AmodeTheme from '../../components/atoms/a-modeTheme';
import axios from 'axios';

export default function Settings(props) {
  const {t} = useTranslation();
  const {colors} = useTheme();
  const [selected, setselected] = useState(t('common:LA'));
  const [menu, setmenu] = useState([
    {
      code: 'LA',
      name: t('common:LA'),
      icon: 'language',
      bgColor: 'red',
    },
    {
      code: 'MD',
      name: t('common:MD'),
      icon: 'brightness-6',
      bgColor: 'grey',
    },
  ]);
  useEffect(() => {
    if (t('common:LA') != selected) {
      var newMenu = menu.map(y => {
        if (y.code == 'LA') y.name = t('common:LA');
        if (y.code == 'MD') y.name = t('common:MD');
        return y;
      });
      setmenu(newMenu);
      setselected(t('common:LA'));
    }
  }, [t]);

  useEffect(() => {
    // getApiWeater();
    fetchCity();
  }, []);

  const getApiWeater = () => {
    const encodedParams = new URLSearchParams();
    encodedParams.append('apiKey', 'i3PHKUcormh629NXzG97px4G5x5ls7Il');
    // encodedParams.append('groupId', '<REQUIRED>');
    const API_KEY = 'i3PHKUcormh629NXzG97px4G5x5ls7Il'; // jdJtjY5LHZvdj0IS8iiRqturSfo6sjq3 // cwlzjnKODPSt5tGLh63JEXDKL03vtfMB
    const API_HOST = 'http://dataservice.accuweather.com/';
    const API_VERSION = 'v1';
    const param = 'countries';
    const group = 'regionCode';
    const options = {
      method: 'POST',
      // url: 'https://accuweatherstefan-skliarovv1.p.rapidapi.com/getIndicesByGroupId',
      uri: `${API_HOST}locations/${API_VERSION}/${param}/${group}?apikey=${API_KEY}`,
      // headers: {
      //   'content-type': 'application/x-www-form-urlencoded',
      //   'X-RapidAPI-Key': 'ad7acd5565mshffad61ea4a541a4p13893ejsn9fdbb6169439',
      //   'X-RapidAPI-Host': 'AccuWeatherstefan-skliarovV1.p.rapidapi.com',
      // },
      // data: encodedParams,
    };
    axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  };
  const fetchCity = () => {
    axios
      .get(
        `http://dataservice.accuweather.com/locations/v1/cities/search?apikey=ICfOrVGI3ofdnGODMlLrRMwyPbISOCdO&q=${'jakarta'}`,
      )
      .then(res => {
        console.log(res);
        // setCityData(res.data[0]);
        // setCitySearch('');
      })
      .catch(err => console.log(err.message));
  };

  return (
    <AContainer>
      <AappBar logos bordered title={t('navigate:Settings')} />
      <AContent bg={colors.background} scroll>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            padding:20
          }}>
          <Image
            style={{
              height: 120,
              width: 120,
              borderRadius: 100,
              marginBottom:20
            }}
            source={require('../../assets/avatar.png')}
          />
          <Text style={{fontSize: 16, fontWeight: '600'}}>Samuel Edwart</Text>
          <Text style={{fontSize: 12, fontWeight: '600'}}>@edsam</Text>
        </View>
        <AText style={[styles.header, {color: colors.text}]}>
          {t('common:GE')}
        </AText>
        {menu.map((item, index) => {
          return (
            <TouchableOpacity
              style={[{borderColor: colors.borderLight}, styles.item_btn]}
              key={index}
              disabled>
              <View style={[styles.item_icon, {backgroundColor: item.bgColor}]}>
                <Aicon name={item.icon} color="#FFF" size={18} />
              </View>
              <View style={styles.label}>
                <AText style={{fontSize: 18, color: colors.textGrey}}>
                  {item.name}
                </AText>
              </View>
              {(item.code == 'LA' && (
                <View style={styles.language}>
                  <AlanguageSelector />
                </View>
              )) ||
                (item.code == 'MD' && <AmodeTheme />)}
            </TouchableOpacity>
          );
        })}
      </AContent>
    </AContainer>
  );
}
const styles = StyleSheet.create({
  item_btn: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    padding: 10,
    paddingHorizontal: 20,
    marginBottom: 2,
  },
  item_icon: {
    width: 30,
    height: 30,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  label: {
    marginLeft: 25,
    flex: 1,
  },
  language: {
    alignItems: 'flex-end',
    width: '50%',
  },
  header: {
    paddingVertical: 10,
    marginLeft: 20,
    fontWeight: '800',
    fontSize: 18,
  },
});
