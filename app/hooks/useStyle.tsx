/**
 * @packageDocumentation
 * This module defines a hooj that receives a style generator and returns a style sheet after processing it.
 */
import {Theme, Window} from '@defs/interfaces';
import useTheme from './useTheme';
import useWindow from './useWindow';

/**
 * This hook listens for theme and window changes and returns a style object from a style generator function.
 * @returns A style sheet.
 */
export default function useStyle<T>(
  generator: (theme: Theme, window: Window) => T,
): T {
  const theme = useTheme();
  const window = useWindow();
  return generator(theme, window);
}
