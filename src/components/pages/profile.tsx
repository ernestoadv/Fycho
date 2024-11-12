/**
 * @packageDocumentation
 * Profile page.
 */
import {StyleSheet} from 'react-native';
import {clearUser} from '../../store/slices/user';
import {useDispatch} from 'react-redux';
import Button from '../atoms/button';
import Template from '../templates/main';
import useTheme from '../../hooks/useTheme';

/**
 * @returns {React.JSX.Element} A React element that renders the Profile Page.
 */
export default function Profile() {
  const dispatch = useDispatch();
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
        text={'Log out'}
        callback={() => dispatch(clearUser())}
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
