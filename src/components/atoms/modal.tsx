/**
 * @packageDocumentation
 * Generic modal atom.
 */
import {
  FadeIn,
  FadeOut,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import {MODAL_HEIGHT, MODAL_WIDTH} from '../../types/consts';
import {Dimensions, StyleSheet} from 'react-native';
import {modalSelector, setDisplay} from '../../store/slices/modal';
import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import Animated from 'react-native-reanimated';
import commonStyles from '../../style/common';
import useTheme from '../../hooks/useTheme';

/**
 * Modal's animation delay in milliseconds.
 */
const ANIMATION_DELAY = 200;
/**
 * Modal's animation duration in milliseconds.
 */
const ANIMATION_DURATION = 200;

/**
 * @notExported
 * This interface defines the properties a modal can receive.
 */
interface Props {
  /**
   * Modal's maximum height.
   */
  height: number;
  /**
   * A node or list of react nodes to render as this component's children.
   */
  Component: () => React.JSX.Element;
}

/**
 * This component renders a modal that wraps one or several children nodes.
 * @param {Props} props Modal properties.
 * @returns {React.JSX.Element} A React element that renders a modal.
 */
export default function Modal({height, Component}: Props) {
  /**
   * Modal display mode.
   */
  const dispatch = useDispatch();
  const {display} = useSelector(modalSelector);

  /**
   * Component animations and styling
   */
  const animation = {
    entering: FadeIn.springify()
      .delay(ANIMATION_DELAY)
      .duration(ANIMATION_DURATION),
    exiting: FadeOut.springify()
      .delay(ANIMATION_DELAY)
      .duration(ANIMATION_DURATION),
    height: useSharedValue(height),
    opacity: useSharedValue(0),
  };
  const theme = useTheme();

  /**
   * Display modal content as soon as a new component is available
   */
  useEffect(() => {
    const timeout = setTimeout(() => {
      dispatch(setDisplay(true));
    }, ANIMATION_DELAY);
    return () => {
      clearTimeout(timeout);
    };
  }, [Component]);

  /**
   * Animate modal content opacity upon display change
   */
  useEffect(() => {
    animation.opacity.value = withTiming(display ? 1 : 0);
  }, [display]);

  /**
   * Animate height upon resize
   */
  useEffect(() => {
    animation.height.value = withTiming(height);
  }, [height]);

  return (
    <Animated.View
      entering={animation.entering}
      style={[
        defaultStyle.container,
        {
          backgroundColor: theme.modal.default,
          height: animation.height,
        },
      ]}>
      {display ? (
        <Animated.View
          style={[{opacity: animation.opacity}, defaultStyle.component]}>
          <Component />
        </Animated.View>
      ) : null}
    </Animated.View>
  );
}

const defaultStyle = StyleSheet.create({
  component: {
    alignItems: 'center',
    alignSelf: 'center',
    display: 'flex',
    gap: 30,
    justifyContent: 'center',
  },
  container: {
    alignSelf: 'center',
    borderRadius: 50,
    justifyContent: 'center',
    maxHeight: Dimensions.get('window').height / 1.2,
    maxWidth: Dimensions.get('window').width / 1.1,
    paddingVertical: 30,
    height: MODAL_HEIGHT.SMALL,
    width: MODAL_WIDTH.BIG,
    ...commonStyles.shadow,
  },
});
