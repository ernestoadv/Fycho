/**
 * @packageDocumentation
 * Main page template.
 */
import {StyleSheet, View} from 'react-native';
import Background from '../molecules/background';
import useTheme from '../../hooks/useTheme';

/**
 * @notExported
 * This interface defines the properties the Main template can receive.
 */
interface Props {
  children?: React.ReactNode | React.ReactNode[];
}

/**
  This component serves as template for pages such as the home, profile, etc.
 * @returns {React.JSX.Element} A React element that renders a template for the Main Page.
 */
export default function Main({children}: Props) {
  const theme = useTheme();
  return (
    <Background color={theme.background.main}>
      <View style={style.container}>{children}</View>
    </Background>
  );
}

const style = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    width: '100%',
  },
});
