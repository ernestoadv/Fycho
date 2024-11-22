/**
 * @packageDocumentation
 * This module defines a hook that configures animations for React components.
 */
import {Animation} from '../defs/enums';
import {FadeIn, FadeOut} from 'react-native-reanimated';
import {Platform} from 'react-native';
import {useMemo} from 'react';

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
   * The type of animation to be used.
   */
  type?: Animation;
}

/**
 * This hook allows animations in several components abstracting its internal logic from them.
 * @param {Props} props Animation properties.
 * @returns An array of results, being the first one the animation style to set to the target component and the second a callback which can be used to trigger the animation.
 */
export default function useAnimation({
  delay = Platform.OS === 'web' ? 0 : 200,
  duration = 300,
  type = Animation.Fade,
}: Props = {}) {
  const animation = useMemo(() => {
    let entering = null;
    let exiting = null;
    switch (type) {
      case Animation.Fade:
      default:
        entering = FadeIn.springify(duration).delay(delay);
        exiting = FadeOut.springify(duration).delay(delay);
    }
    return {entering, exiting};
  }, [type]);

  return animation;
}
