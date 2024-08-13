/**
 * @packageDocumentation
 * This module defines a hook that configures animations for React components.
 */
import {Animated} from 'react-native';
import {useCallback, useRef} from 'react';

/**
 * @notExported
 * This interface defines the properties that the hook will receive.
 */
interface Props {
  /**
   * The delay time until the animation triggers, in milliseconds.
   */
  delay?: number;
  /**
   * The duration the animation will take to complete, in milliseconds.
   */
  duration?: number;
  /**
   * Whether the animation should start from the beginning when it triggers or not.
   */
  reset?: boolean;
  /**
   * Whether the animation should use the native driver to avoid the JS thread to run. Only the UI thread will work.
   * By default, this option is true as animations are faster when not using the JS thread.
   */
  useNativeDriver?: boolean;
  /**
   * The initial and end values the animation will operate.
   */
  value?: {init: number; end: number};
}

/**
 * This hook allows animations in several components abstracting its internal logic from them.
 * @param {Props} props Animation properties.
 * @returns An array of results, being the first one the animation style to set to the target component and the second a callback which can be used to trigger the animation.
 */
export default function useAnimation({
  delay = 0,
  duration = 1000,
  reset = false,
  useNativeDriver = true,
  value = {init: 0, end: 1},
}: Props = {}): [style: Animated.Value, animate: () => void] {
  const animation = useRef(new Animated.Value(value.init)).current;
  const callback = useCallback(() => {
    reset && animation.setValue(0);
    Animated.timing(animation, {
      delay,
      duration,
      toValue: value.end,
      useNativeDriver,
    }).start();
  }, [delay, duration, value]);

  return [animation, callback];
}
