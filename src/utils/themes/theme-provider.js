import {Appearance} from 'react-native';
import * as React from 'react';
import darks from './dark';
import lights from './light';

export const ThemeContext = React.createContext({
  isDark: false,
  colors: lights,
  setScheme: () => {},
});
export const ThemeProvider = props => {
  const colorScheme = Appearance.getColorScheme();
  const [isDark, setIsDark] = React.useState(colorScheme === 'dark');

  React.useEffect(() => {
    setIsDark(colorScheme === 'dark');
  }, [colorScheme]);

  const defaultTheme = {
    isDark,
    colors: isDark ? darks : lights,
    setScheme: scheme => setIsDark(scheme === 'dark'),
  };

  return (
    <ThemeContext.Provider value={defaultTheme}>
      {props.children}
    </ThemeContext.Provider>
  );
};
export const useTheme = () => React.useContext(ThemeContext);
