/**
 * @packageDocumentation
 * Profile page template.
 */

import {StyleSheet, Text, View} from 'react-native';
import {clearUser} from '../../store/slices/user';
import {useDispatch} from 'react-redux';
import Background from '../molecules/background';
import Button from '../atoms/button';
import useTheme from '../../hooks/useTheme';

/**
 *
 */
interface Props {
  name?: string;
}

/**
  This component serves as template for the Profile Page. 
 * @returns {React.JSX.Element} A React element that renders a template for the Profile Page.
 */
export default function Main({name}: Props) {
  const dispatch = useDispatch();
  const theme = useTheme();
  return (
    <Background color={theme.background.main}>
      <View style={style.container}>
        <Text style={{color: theme.text.dark[100], fontSize: 30}}>{name}</Text>
        <Button
          style={{container: style.logoutButton}}
          text={'Log out'}
          callback={() => dispatch(clearUser())}
        />
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
  logoutButton: {
    bottom: 30,
    position: 'absolute',
    height: 40,
    width: 160,
  },
});
