/**
 * @packageDocumentation
 * Main page template.
 */

import {StyleSheet, Text, View} from 'react-native';
import Background from '../molecules/background';
import useTheme from '../../hooks/useTheme';

/**
 *
 */
interface Props {
  name?: string;
}

/**
  This component serves as template for the Main Page. 
 * @returns {React.JSX.Element} A React element that renders a template for the Main Page.
 */
export default function Main({name}: Props) {
  const theme = useTheme();
  return (
    <Background color={theme.background.main}>
      <View style={style.container}>
        <Text style={{color: theme.text.dark[100], fontSize: 30}}>{name}</Text>
      </View>
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
