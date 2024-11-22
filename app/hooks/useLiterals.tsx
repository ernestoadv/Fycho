/**
 * @packageDocumentation
 * This module defines a hook that listens for language changes and provides translated literals to any component.
 */
import {literals as data} from '@assets/literals';
import {getLocales, Locale} from 'expo-localization';
import {useMemo} from 'react';

/**
 * This hook manages the literals to display based on the device settings or user preferences.
 * @returns The current literals to display throughout the app.
 */
export default function useLiterals() {
  const locales: Locale[] = getLocales();
  const literals = useMemo(() => {
    const language =
      locales.find(locale => {
        if (locale?.languageCode && locale.languageCode in data) {
          return true;
        }
        return false;
      })?.languageCode || 'en';
    return data[language];
  }, [locales]);

  return literals;
}
