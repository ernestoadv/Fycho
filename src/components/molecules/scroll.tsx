/**
 * @packageDocumentation
 * Scrollable view.
 */
import {Pressable, ScrollView, StyleProp, ViewStyle} from 'react-native';

/**
 * @notExported
 * This interface defines the properties a scrollable component can receive.
 */
interface Props {
  /**
   * A node or list of react nodes to render as this component's children.
   */
  children: React.ReactNode | React.ReactNode[];
  /**
   * The horizontal/vertical distance between children.
   */
  gap?: number;
  /**
   * Container style.
   */
  style?: StyleProp<ViewStyle>;
}

/**
 * This component renders a view that allows scrolling.
 * @param {Props} props Scroll properties.
 * @returns {React.JSX.Element} A React element that renders a scrollable view.
 */
export default function Scroll({children, gap, style}: Props) {
  gap = gap || 10;
  return (
    <ScrollView style={style}>
      <Pressable style={{gap}}>{children}</Pressable>
    </ScrollView>
  );
}
