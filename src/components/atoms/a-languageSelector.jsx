import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  TouchableOpacity,
} from 'react-native';
import {useTranslation} from 'react-i18next';
import Aicon from './a-icon';
import AText from './a-text';
import {useTheme} from '../../utils/themes/theme-provider';

const LANGUAGES = [
  {code: 'en', label: 'English'},
  {code: 'id', label: 'Indonesia'},
];

const AlanguageSelector = () => {
  const {colors, isDark} = useTheme();
  const {i18n} = useTranslation();
  const selectedLanguageCode = i18n.language;
  const [visible, setvisible] = useState(false);

  const setLanguage = code => {
    return i18n.changeLanguage(code);
  };
  const onVisible = () => {
    setvisible(!visible);
  };
  return (
    <>
      {!visible && (
        <Pressable
          style={{
            padding: 10,
            width: '100%',
            alignItems: 'flex-end',
            marginVertical: -10,
          }}
          onPress={() => onVisible()}
        >
          <AText style={{color: colors.textGrey}}>
            {LANGUAGES.filter(x => x.code === selectedLanguageCode).map(y => {
              return y.label;
            })}
          </AText>
        </Pressable>
      )}
      {visible && (
        <View
          style={{
            width: '100%',
            alignItems: 'flex-end',
            marginVertical: -9,
            padding: 5,
          }}
        >
          {LANGUAGES.map(language => {
            const selectedLanguage = language.code === selectedLanguageCode;
            return (
              <Pressable
                key={language.code}
                disabled={selectedLanguage}
                onPress={() => {
                  setLanguage(language.code);
                  onVisible();
                }}
              >
                <Text
                  style={[
                    selectedLanguage
                      ? styles.selectedText
                      : {
                          fontSize: 18,
                          color: colors.textGrey,
                        },
                  ]}
                >
                  {language.label}
                </Text>
              </Pressable>
            );
          })}
        </View>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    color: '#000',
  },
  selectedText: {
    fontSize: 18,
    fontWeight: '600',
    color: 'green',
  },
});

export default AlanguageSelector;
