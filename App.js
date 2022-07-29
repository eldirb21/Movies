import './src/utils/i18n/IMLocalize';
import {View, Text} from 'react-native';
import React from 'react';
import {ThemeProvider} from './src/utils/themes/theme-provider';
import {NavigationContainer} from '@react-navigation/native';
import AuthNavigation from './src/navigations/AuthNavigation';
import {Provider} from 'react-redux';
import store from './src/redux';

export default function App() {
  return (
    <ThemeProvider>
      <Provider store={store}>
        <NavigationContainer>
          <AuthNavigation />
        </NavigationContainer>
      </Provider>
    </ThemeProvider>
  );
}
