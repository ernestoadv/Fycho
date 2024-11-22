/**
 * @packageDocumentation
 * Pressable back.
 */
import {Icon} from '@defs/enums';
import {InteractionManager, Pressable, ViewStyle} from 'react-native';
import {useEffect, useState} from 'react';
import {useNavigation} from 'expo-router';
import IconManager from '@utils/iconManager';
import usePress from '@hooks/usePress';

/**
 * This component renders pressable icon that pops a page from the stack.
 * @returns {React.JSX.Element} A React element that renders a back icon.
 */
export default function Back({style}: {style?: ViewStyle}) {
  /**
   * Hooks
   */
  const navigator = useNavigation();
  const stack = navigator.canGoBack();
  const {opacity, handlers} = usePress();
  const [display, setDisplay] = useState(false);

  useEffect(() => {
    InteractionManager.runAfterInteractions(() => {
      setDisplay(true);
    });
  }, []);

  useEffect(() => {
    setDisplay(false);
  }, [stack]);

  /**
   * Element
   */
  return display && stack ? (
    <Pressable
      onPressIn={() => {
        handlers.onPressIn();
      }}
      onPressOut={() => {
        handlers.onPressOut();
        navigator.goBack();
      }}
      style={[style, {opacity}]}>
      <IconManager id={Icon.Back} />
    </Pressable>
  ) : null;
}
