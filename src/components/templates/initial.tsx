/**
 * @packageDocumentation
 * Initial page template.
 */
import {Dimensions, StyleSheet} from 'react-native';
import Animated, {FadeIn, FadeOut} from 'react-native-reanimated';
import Back from '../molecules/back';
import Background from '../molecules/background';
import useTheme from '../../hooks/useTheme';

/**
 * @notExported
 * This interface defines the properties the Initial template can receive.
 */
interface Props {
  children?: React.ReactNode | React.ReactNode[];
}

/**
  This component serves as template for pages such as login, reset password, etc.
 * @returns {React.JSX.Element} A React element that renders a template for the Initial Page.
 */
export default function Initial({children}: Props) {
  const theme = useTheme();
  const entering = FadeIn.springify().delay(200);
  const exiting = FadeOut.springify().delay(200);
  return (
    <Background color={theme.background.initial}>
      <Animated.View
        entering={entering}
        exiting={exiting}
        style={style.container}>
        <Back style={style.back} />
        {children}
      </Animated.View>
    </Background>
  );
}

const style = StyleSheet.create({
  back: {
    position: 'absolute',
    left: Dimensions.get('screen').width * 0.075,
    top: Dimensions.get('screen').height * 0.05,
  },
  container: {
    justifyContent: 'center',
    height: '100%',
    width: '100%',
  },
});
