/**
 * @packageDocumentation
 * Access page template.
 */
import {StyleSheet} from 'react-native';
import Animated from 'react-native-reanimated';
import Back from '@components/molecules/back';
import Background from '@components/molecules/background';
import useAnimation from '@hooks/useAnimation';
import useStyle from '@hooks/useStyle';

/**
 * @notExported
 * This interface defines the properties the Access template can receive.
 */
interface Props {
  children?: React.ReactNode | React.ReactNode[];
}

/**
  This component serves as template for pages such as login, reset password, etc.
 * @returns {React.JSX.Element} A React element that renders a template for the Access Page.
 */
export default function Access({children}: Props) {
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
        top: 20,
        zIndex: 1,
      },
      background: {
        backgroundColor: theme.background.access,
      },
      container: {
        flex: 1,
      },
    });
  });
  /**
   * Elements
   */
  return (
    <Background style={style.background}>
      <Animated.View {...animation} style={style.container}>
        <Back style={style.back} />
        {children}
      </Animated.View>
    </Background>
  );
}
