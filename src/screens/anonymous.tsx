/**
 * @packageDocumentation
 * This component allows to navigate between different pages.
 * These screens are accesible when using an anonymous user.
 */
import {createNativeStackNavigator} from '@react-navigation/native-stack';

/**
 * Navigable pages
 */
import Login from '../components/pages/login';
import Reset from '../components/pages/reset';

/**
 * Anonymous stack
 */
const Stack = createNativeStackNavigator();

/**
 * Stack that provides access to anonymous pages only.
 *
 * @returns Stack navigator that allows switching between certain pages.
 */
export default function Anonymous() {
  return (
    <Stack.Navigator
      initialRouteName={'Login'}
      screenOptions={{headerShown: false}}>
      <>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Reset" component={Reset} />
      </>
    </Stack.Navigator>
  );
}
