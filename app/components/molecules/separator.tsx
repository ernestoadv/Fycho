/**
 * @packageDocumentation
 * A separator to display between components.
 */
import {Color} from '@/app/defs/types';
import {StyleProp, StyleSheet, View, ViewStyle} from 'react-native';
import useStyle from '@hooks/useStyle';

/**
 * @notExported
 * This interface defines the properties a separator component can receive.
 */
interface Props {
  /**
   * Separator's border color.
   */
  color: Color;
  /**
   * Whether the separator should be displayed or not.
   */
  display?: boolean;
  /**
   * Separator container style.
   */
  style?: StyleProp<ViewStyle>;
}

/**
 * This component renders a view that acts as delimiter between components.
 * @param {Props} props Separator properties.
 * @returns {React.JSX.Element} A React element that renders a separator.
 */
export default function Separator({color, display, style}: Props) {
  /**
   * Style
   */
  const defaultStyle = useStyle(theme => {
    return StyleSheet.create({
      separator: {
        width: '90%',
        borderWidth: 0.5,
        borderColor: color,
        opacity: 0.075,
      },
    });
  });

  /**
   * Element
   */
  return display ? <View style={[defaultStyle.separator, style]} /> : null;
}
