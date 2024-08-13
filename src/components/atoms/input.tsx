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
} from 'react-native';
import {Icon} from '../../types/enums';
import {useMemo, useState} from 'react';
import IconManager from '../../utils/iconManager';
import commonStyles from '../../style/common';
import useTheme from '../../hooks/useTheme';

/**
 * @notExported
 * This interface defines the properties an input can receive.
 */
interface Props {
  /**
   * Informative icon to display at the end of the input.
   */
  icon?: Icon;
  /**
   * Input placeholder prior to user input.
   */
  placeholder?: {
    /**
     * The color of the placeholder.
     */
    color?: string;
    /**
     * The text to set as placeholder.
     */
    text?: string;
  };
  /**
   * Whether the input text can be displayed or not. Useful to hide passwords.
   */
  secure?: boolean;
  /**
   * Input container and text style.
   */
  style?: StyleProp<TextStyle>;
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
  const theme = useTheme();
  const color = useMemo(
    () => placeholder?.color || theme.text.white[100],
    [placeholder, theme],
  );

  return (
    <View
      style={[defaultStyle.container, commonStyles.shadow]}
      testID={'inputContainer'}>
      <TextInput
        autoCapitalize={'none'}
        keyboardType={type}
        placeholder={placeholder?.text}
        placeholderTextColor={!focused ? color : 'transparent'}
        secureTextEntry={secure}
        selectionColor={color}
        testID={'textInput'}
        onBlur={() => setFocused(false)}
        onFocus={() => setFocused(true)}
        style={[
          {
            backgroundColor: theme.input.default,
            color: theme.text.white[100],
          },
          defaultStyle.input,
          style,
        ]}
      />
      <View style={[defaultStyle.icon]}>
        <IconManager icon={icon} />
      </View>
    </View>
  );
};

const defaultStyle = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    position: 'absolute',
    right: 20,
  },
  input: {
    height: '100%',
  },
});

export default Input;
