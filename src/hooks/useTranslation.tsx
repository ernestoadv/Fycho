/**
 * @packageDocumentation
 * This module defines a hook that listens for language changes and provides translated literals to any component.
 */
import {Locales, English, Spanish} from '../assets/literals';
import {useMemo} from 'react';
import {NativeModules} from 'react-native';

/**
 * This hook manages the literals to display based on the device settings or user preferences.
 * @returns The current literals to display throughout the app.
 */
export default function useTranslation() {
  const language =
    NativeModules.I18nManager.localeIdentifier || // Android
    NativeModules.SettingsManager.settings.AppleLocale || // iOS
    NativeModules.SettingsManager.settings.AppleLanguages[0];

  const literals = useMemo(() => {
    if (Locales.English.includes(language)) {
      return English;
    }
    if (Locales.Spanish.includes(language)) {
      return Spanish;
    }
    if (Locales.English.includes(language)) {
      return English;
    }
    return English;
  }, [language]);

  return literals;
}
