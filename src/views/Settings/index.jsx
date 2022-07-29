import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
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

  return (
    <AContainer>
      <AappBar logos bordered title={t('navigate:Settings')} />
      <AContent bg={colors.background} scroll>
        <AText style={[styles.header, {color: colors.text}]}>
          {t('common:GE')}
        </AText>
        {menu.map((item, index) => {
          return (
            <TouchableOpacity
              style={[{borderColor: colors.borderLight}, styles.item_btn]}
              key={index}
              disabled
            >
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
                (item.code == 'MD' && (
                  <View>
                    <AmodeTheme />
                  </View>
                ))}
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
