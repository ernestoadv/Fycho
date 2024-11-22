/**
 * @packageDocumentation
 * This module defines a hook that listens for window canvas changes and provides useful data.
 */
import {Window} from '@defs/interfaces';
import {useWindowDimensions} from 'react-native';
import {useEffect, useMemo, useState} from 'react';
import {
  addOrientationChangeListener,
  getOrientationAsync,
  removeOrientationChangeListener,
  Orientation,
} from 'expo-screen-orientation';

/**
 * This hook manages the window dimensions. It takes the native useWindowDimensions hook
 * to obtain the window meausrements and returns useful data such as ratio, landscape mode, etc.
 * @returns {Window} An object including useful values in relation to the current window.
 */
export default function useWindow(): Window {
  /**
   * Hooks
   */
  const [orientation, setOrientation] = useState<Orientation>(
    Orientation.UNKNOWN,
  );
  const {height, width} = useWindowDimensions();

  /**
   * Obtain landscape, portrait and ratio from height and width changes
   */
  const {landscape, portrait, ratio} = useMemo(() => {
    const landscape = width >= height;
    const portrait = height > width;
    const ratio = {
      heightWidth: height / width,
      widthHeight: width / height,
    };
    return {landscape, portrait, ratio};
  }, [height, width]);

  /**
   * Obtain orientation value and listen to further changes
   */
  useEffect(() => {
    // Obtain current orientation
    getOrientationAsync().then(value => {
      setOrientation(value);
    });
    // Listen to orientation changes
    let orientationListener = null;
    try {
      orientationListener = addOrientationChangeListener(value => {
        setOrientation(value.orientationInfo.orientation);
      });
    } catch (error) {
      // On web this function does not exist although Expo docs supports it on navigators.
    }
    return () => {
      // Remove listener when upon hook destruction
      if (orientationListener) {
        removeOrientationChangeListener(orientationListener);
      }
    };
  }, []);

  return {
    height,
    landscape,
    orientation,
    portrait,
    ratio,
    width,
  };
}
