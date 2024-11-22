/**
 * @packageDocumentation
 * Generic input atom.
 */
import {
  KeyboardTypeOptions,
  StyleProp,
  StyleSheet,
  TextInput,
  TextStyle,
  View,
  ViewStyle,
} from 'react-native';
import {Color} from '@defs/types';
import {Icon} from '@defs/enums';
import {useState} from 'react';
import IconManager from '@utils/iconManager';

/**
 * @notExported
 * This interface defines the properties an input can receive.
 */
interface Props {
  /**
   * Informative icon to display at the beginning of the input.
   */
  icon?: {
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
   * The text to set as placeholder.
   */
  placeholder?: string;
  /**
   * Whether the input text can be displayed or not. Useful to hide passwords.
   */
  secure?: boolean;
  /**
   * Input container and text style.
   */
  style?: {
    /**
     * Container style.
     */
    container?: StyleProp<ViewStyle>;
    /**
     * Text style.
     */
    input?: StyleProp<TextStyle>;
    /**
     * The color of the placeholder.
     */
    placeholder?: Color;
  };
  /**
   * Keyboard type. Useful to identify if device is using Android or iOS.
   */
  type?: KeyboardTypeOptions;
}
/**
 * This component renders an customizable input.
 * @param {Props} props Input properties.
 * @returns {React.JSX.Element} A React element that renders an input.
 */
const Input = function Input({icon, placeholder, secure, style, type}: Props) {
  const [focused, setFocused] = useState(false);
  return (
    <View
      style={[defaultStyle.container, style?.container]}
      testID={'inputContainer'}>
      <IconManager {...icon} />
      <TextInput
        autoCapitalize={'none'}
        keyboardType={type}
        placeholder={placeholder}
        placeholderTextColor={!focused ? style?.placeholder : 'transparent'}
        secureTextEntry={secure}
        selectionColor={style?.placeholder}
        testID={'textInput'}
        onBlur={() => setFocused(false)}
        onFocus={() => setFocused(true)}
        style={style?.input}
      />
    </View>
  );
};

const defaultStyle = StyleSheet.create({
  container: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row',
  },
});

export default Input;
