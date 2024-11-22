/**
 * @packageDocumentation
 * Background view.
 */
import {View, ViewStyle} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

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
   * Background's style.
   */
  style: ViewStyle;
}

/**
 * This component renders a view with a fill color that acts as the application background.
 * @param {Props} props Background properties.
 * @returns {React.JSX.Element} A React element that renders a background.
 */
export default function Background({children, style}: Props) {
  const mobileInsets = useSafeAreaInsets();
  const webInsets = {top: 20};
  return (
    <View
      style={{
        flex: 1,
        paddingBottom: mobileInsets.bottom,
        paddingLeft: mobileInsets.left,
        paddingRight: mobileInsets.right,
        paddingTop: mobileInsets.top || webInsets.top,
        ...style,
      }}
      testID="background">
      {children}
    </View>
  );
}
