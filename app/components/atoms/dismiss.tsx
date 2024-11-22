/**
 * @packageDocumentation
 * A custom TouchableWithoutFeedback atom.
 */
import {Keyboard, TouchableWithoutFeedback} from 'react-native';

/**
 * @notExported
 * This interface defines the properties a 'DismissKeyboard' can receive.
 */
interface Props {
  /**
   * A node or list of react nodes to render as this component's children.
   */
  children: React.ReactNode | React.ReactNode[];
}

/**
  This component allows dismissing the OS' virtual keyboard by tapping outside its constraints.
 * @param {Props} props DismissKeyboard properties.
 * @returns {React.JSX.Element} A React element that renders a custom TouchableWithoutFeedback.
 */
const DismissKeyboard = ({children}: Props) => (
  <TouchableWithoutFeedback
    accessible={false}
    testID={'dismissKeyboard'}
    onPress={() => Keyboard.dismiss()}>
    {children}
  </TouchableWithoutFeedback>
);

export default DismissKeyboard;
