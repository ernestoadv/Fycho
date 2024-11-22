/**
 * @packageDocumentation
 * Setting button.
 */
import {Color} from '@/app/defs/types';
import {Icon} from '@/app/defs/enums';
import {StyleProp, StyleSheet, TextStyle, View, ViewStyle} from 'react-native';
import Button from '@components/atoms/button';
import IconManager from '@/app/utils/iconManager';
import useStyle from '@hooks/useStyle';

/**
 * @notExported
 * This interface defines the properties a setting component can receive.
 */
interface Props {
  /**
   * Whether the setting has to display a caret placded on the right or not.
   */
  caret?: boolean;
  /**
   * Button icon.
   */
  icon: {
    /**
     * Icon identifier
     */
    id: Icon;
    /**
     * Icon color
     */
    color?: Color;
  };
  /**
   * Button text.
   */
  text?: string;
  /**
   * Button container and text style.
   */
  style?: {
    /**
     * Setting container custom style
     */
    container?: StyleProp<ViewStyle>;
    /**
     * Setting text custom style
     */
    text?: StyleProp<TextStyle>;
  };
  /**
   * Callback to trigger after button press.
   */
  callback?: () => void;
}

/**
 * This component renders a button with an icon and a caret that triggers a callback when pressed.
 * @param {Props} props Setting properties.
 * @returns {React.JSX.Element} A React element that renders a setting button.
 */
export default function Setting({caret, icon, style, text, callback}: Props) {
  /**
   * Style
   */
  const defaultStyle = useStyle((theme, window) => {
    const {landscape} = window;
    return StyleSheet.create({
      /* Colors */
      icon: {
        color: theme.settings.item.default,
      },
      /* Containers */
      buttonContainer: {
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        gap: 15,
        paddingLeft: 15,
        paddingVertical: 15,
        width: landscape ? 350 : window.width * 0.8,
      },
      caretContainer: {
        display: 'flex',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        paddingRight: 20,
      },
      settingContainer: {
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'row',
      },
      /* Text */
      settingText: {
        color: theme.settings.item.default,
        fontSize: 18,
        fontWeight: '300',
      },
    });
  });

  /**
   * Element
   */
  return (
    <View style={defaultStyle.settingContainer}>
      <Button
        callback={callback}
        icon={{...icon, color: icon?.color || defaultStyle.icon.color}}
        style={{
          button: [defaultStyle.buttonContainer, style?.container],
          text: [defaultStyle.settingText, style?.text],
        }}
        text={text}>
        {caret ?? true ? (
          <View style={defaultStyle.caretContainer}>
            <IconManager
              id={Icon.Caret}
              color={icon?.color || defaultStyle.icon.color}
            />
          </View>
        ) : null}
      </Button>
    </View>
  );
}
