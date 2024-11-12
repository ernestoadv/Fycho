/**
 * @packageDocumentation
 * Calendar page.
 */
import {StyleSheet} from 'react-native';
import Button from '../atoms/button';
import Template from '../templates/main';
import useTheme from '../../hooks/useTheme';

/**
 * @returns {React.JSX.Element} A React element that renders the Calendar Page.
 */
export default function Calendar() {
  const theme = useTheme();
  return (
    <Template>
      <Button
        style={{
          container: {
            ...style.logoutButton,
            backgroundColor: theme.button.light,
          },
        }}
        text={'Press me'}
      />
    </Template>
  );
}

const style = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    width: '100%',
  },
  logoutButton: {
    bottom: 30,
    position: 'absolute',
    height: 50,
    width: 320,
  },
});
