/**
 * @packageDocumentation
 * Pressable back.
 */
import {Icon} from '../../types/enums';
import {InteractionManager, Pressable, ViewStyle} from 'react-native';
import {useEffect, useState} from 'react';
import {useNavigationState} from '@react-navigation/native';
import IconManager from '../../utils/iconManager';
import useNavigation from '../../hooks/useNavigation';
import usePress from '../../hooks/usePress';

/**
 * This component renders pressable icon that pops a page from the stack.
 * @returns {React.JSX.Element} A React element that renders a back icon.
 */
export default function Back({style}: {style?: ViewStyle}) {
  /**
   * Hooks
   */
  const navigator = useNavigation();
  const stack = useNavigationState(state => state.routes.length);
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
  return display && stack > 1 ? (
    <Pressable
      onPressIn={() => {
        handlers.onPressIn();
      }}
      onPressOut={() => {
        handlers.onPressOut();
        navigator.pop();
      }}
      style={[style, {opacity}]}>
      <IconManager icon={Icon.Back} />
    </Pressable>
  ) : null;
}
