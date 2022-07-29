import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {View, Text} from 'react-native';
import React from 'react';
import {useTranslation} from 'react-i18next';

import {dataTabs} from './data-root';
import Aicon from '../components/atoms/a-icon';
import {useTheme} from '../utils/themes/theme-provider';

const Tab = createBottomTabNavigator();

export default function TabNavigation() {
  const {colors} = useTheme();
  const {t} = useTranslation();
  var tabBarOptions = {
    keyboardHidesTabBar: true,
    adaptive: true,
    showLabel: true,
    style: {height: 66},
    tabStyle: {margin: 4},
    labelStyle: {
      fontSize: 14,
      marginTop: -10,
    },
  };

  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarLabelStyle: {
          fontSize: 17,
          marginBottom: 4,
        },
        tabBarIconStyle: {
          marginTop: 4,
        },
        tabBarStyle: {
          height: 60,
        },
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          if (route.name === 'Movies') {
            iconName = focused ? 'film-outline' : 'film-outline';
          } else if (route.name === 'Settings') {
            iconName = focused ? 'settings-outline' : 'settings-outline';
          }

          return (
            <Aicon
              name={iconName}
              type="Ionicons"
              size={29}
              color={focused ? colors.tabActiveColor : colors.tabInactiveColor}
            />
          );
        },
        tabBarInactiveBackgroundColor: colors.background,
        tabBarActiveBackgroundColor: colors.tabActiveBg,
        tabBarActiveTintColor: colors.tabActiveColor,
        tabBarInactiveTintColor: colors.tabInactiveColor,
      })}
    >
      {Array.isArray(dataTabs) &&
        dataTabs.map((item, index) => (
          <Tab.Screen
            key={index}
            name={item.name}
            component={item.components}
            options={{
              tabBarLabel:
                (item.name == 'Movies' && t('navigate:Movies')) ||
                (item.name == 'Settings' && t('navigate:Settings')),
            }}
          />
        ))}
    </Tab.Navigator>
  );
}
