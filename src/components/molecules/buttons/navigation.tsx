/**
 * @packageDocumentation
 * Back button.
 */
import {Color} from '../../../types/types';
import {Icon, Modal, Page} from '../../../types/enums';
import {StyleProp, ViewStyle} from 'react-native';
import {setModal} from '../../../store/slices/modal';
import {setPage} from '../../../store/slices/user';
import {useCallback, useEffect, useState} from 'react';
import {useDispatch} from 'react-redux';
import Animated, {FadeIn} from 'react-native-reanimated';
import Button from '../../atoms/button';
import commonStyles from '../../../style/common';
import useTheme from '../../../hooks/useTheme';

/**
 * Button's animation delay in milliseconds.
 */
const ANIMATION_DELAY = 200;
/**
 * Button's animation duration in milliseconds.
 */
const ANIMATION_DURATION = 500;

/**
 * @notExported
 * This interface defines the properties the back button can receive.
 */
interface Props {
  color?: {
    /**
     * Button fill color.
     */
    background?: Color;
    /**
     * Button's icon fill color.
     */
    icon?: Color;
  };
  /**
   * An icon identifier that will display an image inside the button.
   */
  icon?: Icon;
  /**
   * Modal to open on button pressure.
   * Can only open a modal or a page at the same time.
   */
  modal?: Modal;
  /**
   * Page to open on button pressure.
   * Can only open a modal or a page at the same time.
   */
  page?: Page;
  /**
   * Container style.
   */
  style?: StyleProp<ViewStyle>;
}

/**
 * This component renders a navigation button. Can replace the current view with a new modal or page.
 * @param {Props} props Navigation button properties.
 * @returns {React.JSX.Element} A React element that renders a button.
 */
export default function NavigationButton({
  color,
  icon,
  modal,
  page,
  style,
}: Props) {
  const dispatch = useDispatch();

  /**
   * Component animations and styling
   */
  const animation = {
    entering: FadeIn.springify()
      .delay(ANIMATION_DELAY)
      .duration(ANIMATION_DURATION),
  };
  const theme = useTheme();
  // const exiting = FadeOut.springify()
  //   .delay(ANIMATION_DELAY)
  //   .duration(ANIMATION_DURATION);

  /**
   * Callback to trigger on press
   */
  const callback = useCallback(() => {
    if (modal) {
      dispatch(setModal(modal));
      return;
    }
    if (page) {
      dispatch(setPage(page));
      return;
    }
  }, [modal, page]);

  return (
    <Animated.View
      entering={animation.entering}
      style={commonStyles.modalButtonContainer}>
      <Button
        icon={icon}
        style={{
          icon: color?.icon,
          container: [
            commonStyles.modalButtonDimensions,
            {
              backgroundColor: color?.background || theme.button.light,
            },
            style,
          ],
        }}
        callback={callback}
      />
    </Animated.View>
  );
}
