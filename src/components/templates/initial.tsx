/**
 * @packageDocumentation
 * Initial page template.
 */
import Background from '../molecules/background';
import Modal from '../../utils/modalManager';
import useTheme from '../../hooks/useTheme';
import {StyleSheet, View} from 'react-native';

/**
  This component serves as template for the Initial Page. Displays a dynamic modal over a background.
 * @returns {React.JSX.Element} A React element that renders a template for the Initial Page.
 */
export default function Initial() {
  const theme = useTheme();
  return (
    <Background color={theme.background.login}>
      <View style={style.container}>
        <Modal />
      </View>
    </Background>
  );
}

const style = StyleSheet.create({
  container: {justifyContent: 'center', height: '100%', width: '100%'},
});
