/**
 * @packageDocumentation
 * Main page template.
 */
import {StyleSheet} from 'react-native';
import Animated from 'react-native-reanimated';
import Background from '@components/molecules/background';
import useAnimation from '@hooks/useAnimation';
import useStyle from '@hooks/useStyle';

/**
 * @notExported
 * This interface defines the properties the Main template can receive.
 */
interface Props {
  children?: React.ReactNode | React.ReactNode[];
}

/**
  This component serves as template for pages such as the home, settings, etc.
 * @returns {React.JSX.Element} A React element that renders a template for the Main Page.
 */
export default function Main({children}: Props) {
  /**
   * Animations
   */
  const animation = useAnimation();

  /**
   * Style
   */
  const style = useStyle(theme => {
    return StyleSheet.create({
      back: {
        left: 20,
        zIndex: 1,
      },
      background: {
        backgroundColor: theme.background.main,
      },
      container: {
        alignItems: 'center',
        flex: 1,
        flexDirection: 'column',
      },
    });
  });

  /**
   * Elements
   */
  return (
    <Background style={style.background}>
      <Animated.View {...animation} style={style.container}>
        {children}
      </Animated.View>
    </Background>
  );
}
