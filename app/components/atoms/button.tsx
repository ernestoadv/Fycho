/**
 * @packageDocumentation
 * Generic button atom.
 */
import {Color} from '@defs/types';
import {Icon} from '@defs/enums';
import {Pressable, StyleProp, Text, TextStyle, ViewStyle} from 'react-native';
import IconManager from '@utils/iconManager';
import usePress from '@hooks/usePress';

/**
 * @notExported
 * This interface defines the properties a button can receive.
 */
interface Props {
  /**
   * Optional nodes to paint inside the current button.
   */
  children?: React.ReactNode | React.ReactNode[];
  /**
   * Icon data to display an icon inside the current button.
   */
  icon?: {
    /**
     * Icon fill color.
     */
    color?: Color;
    /**
     * Icon indentifier.
     */
    id: Icon;
  };
  /**
   * Button style.
   */
  style?: {
    /**
     * Container style.
     */
    button?: StyleProp<ViewStyle>;
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
export default function Button({children, icon, style, text, callback}: Props) {
  const {opacity, handlers} = usePress({callback, minOpacity: 0.5});
  return (
    <Pressable style={[{opacity}, style?.button]} {...handlers}>
      {icon ? <IconManager {...icon} /> : null}
      {text ? <Text style={style?.text}>{text}</Text> : null}
      {children}
    </Pressable>
  );
}
