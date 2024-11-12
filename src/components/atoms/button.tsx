/**
 * @packageDocumentation
 * Generic button atom.
 */
import {
  Pressable,
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
  ViewStyle,
} from 'react-native';
import {Icon} from '../../types/enums';
import {Color} from '../../types/types';
import IconManager from '../../utils/iconManager';
import usePress from '../../hooks/usePress';

/**
 * @notExported
 * This interface defines the properties a button can receive.
 */
interface Props {
  /**
   * An icon identifier for the IconManager to display.
   */
  icon?: Icon;
  /**
   * Button style.
   */
  style?: {
    /**
     * Container style.
     */
    container?: StyleProp<ViewStyle>;
    /**
     * Fill color.
     */
    icon?: Color;
    /**
     * Text style.
     */
    text?: StyleProp<TextStyle>;
  };
  /**
   * Button text to display.
   */
  text?: string;
  /**
   * Callback to trigger after button press.
   */
  callback?: () => void;
}

/**
 * This component renders a customizable button.
 * @param {Props} props Button properties.
 * @returns {React.JSX.Element} A React element that renders a button.
 */
export default function Button({icon, style, text, callback}: Props) {
  const {opacity, handlers} = usePress({callback});
  return (
    <Pressable
      {...handlers}
      testID={'buttonContainer'}
      style={[
        {opacity},
        defaultStyle.container,
        style?.container,
        icon && text ? defaultStyle.start : null,
      ]}>
      {icon ? <IconManager color={style?.icon} icon={icon} /> : null}
      {text ? (
        <Text testID={'buttonText'} style={style?.text}>
          {text}
        </Text>
      ) : null}
    </Pressable>
  );
}

const defaultStyle = StyleSheet.create({
  container: {
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'center',
  },
  start: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    paddingLeft: 30,
    gap: 15,
  },
});
