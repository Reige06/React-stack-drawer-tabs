import React, { createContext, useContext, useState, ReactNode } from 'react';
import { useColorScheme } from 'react-native';
import { MD3DarkTheme, MD3LightTheme, PaperProvider } from 'react-native-paper';

const ThemeContext = createContext({
  toggleTheme: () => {},
  isDark: false,
});

export const useThemeContext = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const systemTheme = useColorScheme();
  const [isDark, setIsDark] = useState(systemTheme === 'dark');

  const toggleTheme = () => setIsDark((prev) => !prev);

  const customLightTheme = {
    ...MD3LightTheme,
    colors: {
      ...MD3LightTheme.colors,
      primary: '#4facfe',
      secondary: '#43e97b',
      background: '#ffffff',
      surface: '#f2f2f2',
      onPrimary: '#ffffff',
      onBackground: '#000000',
      elevation: {
        ...MD3LightTheme.colors.elevation,
        level2: '#f2f2f2',
      },
    },
  };

  const customDarkTheme = {
    ...MD3DarkTheme,
    colors: {
      ...MD3DarkTheme.colors,
      primary: '#4facfe',
      secondary: '#43e97b',
      background: '#121212',
      surface: '#1e1e1e',
      onPrimary: '#ffffff',
      onBackground: '#ffffff',
      elevation: {
        ...MD3DarkTheme.colors.elevation,
        level2: '#1e1e1e',
      },
    },
  };

  const theme = isDark ? customDarkTheme : customLightTheme;

  return (
    <ThemeContext.Provider value={{ toggleTheme, isDark }}>
      <PaperProvider theme={theme}>
        {children}
      </PaperProvider>
    </ThemeContext.Provider>
  );
};
