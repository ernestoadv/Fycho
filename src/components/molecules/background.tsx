/**
 * @packageDocumentation
 * Background view.
 */
import {Color} from '../../types/types';
import {StyleSheet, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import DismissKeyboard from '../atoms/dismiss';

/**
 * @notExported
 * This interface defines the properties a background component can receive.
 */
interface Props {
  /**
   * A node or list of react nodes to render as this component's children.
   */
  children: React.ReactNode | React.ReactNode[];
  /**
   * Background's fill color.
   */
  color: Color;
}

/**
 * This component renders a view with a fill color that acts as the application background.
 * @param {Props} props Background properties.
 * @returns {React.JSX.Element} A React element that renders a background.
 */
export default function Background({children, color}: Props) {
  const insets = useSafeAreaInsets();
  return (
    <DismissKeyboard>
      <View
        style={{
          backgroundColor: color,
          paddingBottom: insets.bottom,
          paddingLeft: insets.left,
          paddingRight: insets.right,
          paddingTop: insets.top,
        }}
        testID="background">
        {children}
      </View>
    </DismissKeyboard>
  );
}
