/**
 * @packageDocumentation
 * Login modal.
 */
import {Dimensions, StyleSheet} from 'react-native';
import {Icon} from '../../../types/enums';
import {setUser} from '../../../store/slices/user';
import {useDispatch} from 'react-redux';
import Button from '../../atoms/button';
import Input from '../../atoms/input';
import useTranslation from '../../../hooks/useTranslation';
import useTheme from '../../../hooks/useTheme';

/**
 * This component renders the login modal to allow the user to authenticate.
 * @returns {React.JSX.Element} A React element that renders a modal.
 */
export default function Login() {
  const dispatch = useDispatch();
  const literals = useTranslation();
  const theme = useTheme();

  return (
    <>
      <Input
        icon={Icon.Email}
        placeholder={{text: literals.login.email}}
        style={styles.input}
      />
      <Input
        icon={Icon.Password}
        placeholder={{text: literals.login.password}}
        secure={true}
        style={styles.input}
      />
      <Button
        text={literals.login.login}
        style={{
          container: [
            styles.loginButton,
            {backgroundColor: theme.button.default},
          ],
        }}
        callback={() => {
          console.log('TBD: Call an API');
          dispatch(setUser({token: 'mock'}));
        }}
      />
    </>
  );
}

const styles = StyleSheet.create({
  input: {
    borderRadius: 50,
    height: 50,
    paddingHorizontal: 20,
    width: 300,
  },
  infoButton: {
    bottom: -Dimensions.get('window').height / 6,
    position: 'absolute',
    height: 60,
    width: 60,
  },
  loginButton: {
    height: 40,
    width: 160,
  },
});
