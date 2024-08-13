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
import commonStyles from '../../style/common';
import IconManager from '../../utils/iconManager';
import usePress from '../../hooks/usePress';
import useTheme from '../../hooks/useTheme';

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
  const [opacity, handlers] = usePress({callback});
  const theme = useTheme();
  return (
    <Pressable
      {...handlers}
      style={[
        {backgroundColor: theme.button.default, opacity},
        defaultStyle.container,
        commonStyles.shadow,
        style?.container,
        icon && text ? defaultStyle.start : null,
      ]}
      testID={'buttonContainer'}>
      {icon ? <IconManager color={style?.icon} icon={icon} /> : null}
      {text ? (
        <Text
          style={[
            {
              color: theme.text.white[100],
            },
            defaultStyle.text,
            commonStyles.shadow,
            style?.text,
          ]}
          testID={'buttonText'}>
          {text}
        </Text>
      ) : null}
    </Pressable>
  );
}

const defaultStyle = StyleSheet.create({
  container: {
    alignItems: 'center',
    borderRadius: 50,
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
  text: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});
