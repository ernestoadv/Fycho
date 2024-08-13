/**
 * @packageDocumentation
 * This module defines a hook that listens to screen press events.
 */
import {useState} from 'react';

const MAX_OPACITY = 1;
const MIN_OPACITY = 0.8;

/**
 * @notExported
 * This interface defines the properties that the hook will receive.
 */
interface Props {
  /**
   * Maximum opacity the component will display after a press event. Default is '1'.
   */
  maxOpacity?: number;
  /**
   * Minimum opacity the component will display during press events. Default is '0.8'.
   */
  minOpacity?: number;
  /**
   * The callback to trigger after a press event.
   */
  callback?: () => void;
}

/**
 * This hook manages screen press events triggering handlers and UI changes.
 * @param {Props} props Press hook properties.
 * @returns An array of results, being the first parameter the opacity value for the associated component. The next parameters are press event handlers.
 */
export default function usePress({
  callback,
  maxOpacity,
  minOpacity,
}: Props = {}): [
  opacity: number, // Opacity
  handlers: {
    onPress: () => void;
    onPressIn: () => void;
    onPressOut: () => void;
  },
] {
  const [opacity, setOpacity] = useState(MAX_OPACITY);
  return [
    opacity,
    {
      onPress: () => {
        callback && callback();
      },
      onPressIn: () => {
        setOpacity(minOpacity || MIN_OPACITY);
      },
      onPressOut: () => {
        setOpacity(maxOpacity || MAX_OPACITY);
      },
    },
  ];
}
