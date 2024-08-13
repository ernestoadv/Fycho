/**
 * @packageDocumentation
 * This module defines a hook that listens for theme changes and provides the current one to any component.
 */
import {ColorScheme} from '../types/enums';
import {Dark, Light} from '../assets/themes';
import {Theme} from '../types/interfaces';
import {useColorScheme} from 'react-native';
import {useMemo} from 'react';

/**
 * This hook manages the theme to display based on the device settings or user preferences.
 * @returns The current theme to display throughout the app.
 */
export default function useTheme(): Theme {
  const scheme = useColorScheme();
  const theme = useMemo(() => {
    switch (scheme) {
      case ColorScheme.Dark:
        return Dark;
      case ColorScheme.Light:
      default:
        return Light;
    }
  }, [scheme]);

  return theme;
}
