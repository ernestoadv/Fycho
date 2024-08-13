/**
 * @packageDocumentation
 * This module selects and renders a page component, being a page an instance of a template.
 */
import {Icon} from '../types/enums';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {useSelector} from 'react-redux';
import {userSelector} from '../store/slices/user';
import IconManager from './iconManager';
import useTheme from '../hooks/useTheme';

/**
 * Navigable pages
 */
import Calendar from '../components/pages/calendar';
import Home from '../components/pages/home';
import Initial from '../components/pages/initial';
import Profile from '../components/pages/profile';

/**
 * Main stack
 */
const Stack = createNativeStackNavigator();

/**
 * Tab stack
 */
const Tab = createBottomTabNavigator();

/**
 * Main tab navigator: https://reactnavigation.org/docs/tab-based-navigation/
 * This component renders a view with several toggle buttons that serve
 * as a quick access to different pages.
 *
 * @returns Tab navigator that allows switching between certain pages.
 */
const Main = () => {
  const theme = useTheme();
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarStyle: {
          backgroundColor: theme.menu.background,
          borderTopColor: theme.menu.border,
          borderTopWidth: 0.5,
          height: 82,
        },
        tabBarActiveTintColor: theme.menu.icon.active,
        tabBarInactiveTintColor: theme.menu.icon.inactive,
        tabBarIcon: ({focused}) => {
          let color = theme.menu.icon[focused ? 'active' : 'inactive'];
          let icon = undefined;
          switch (route.name) {
            case 'Calendar':
              icon = Icon.Home;
              break;
            case 'Home':
              icon = Icon.Home;
              break;
            case 'Profile':
              icon = Icon.Home;
              break;
          }
          return <IconManager color={color} icon={icon} />;
        },
      })}>
      <Tab.Screen component={Calendar} name="Calendar" options={{}} />
      <Tab.Screen component={Home} name="Home" options={{}} />
      <Tab.Screen component={Profile} name="Profile" options={{}} />
    </Tab.Navigator>
  );
};

/**
 * This component selects and renders the page the user has navigated to.
 * All navigable screens are listed under the Stack's and Tab's navigators.
 * Protected routes pattern is followed: https://reactnavigation.org/docs/auth-flow/
 * @returns {React.JSX.Element} A React element that renders a page.
 */
export default function ScreenManager() {
  const {token} = useSelector(userSelector);
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={token ? 'LoggedIn' : 'LoggedOut'}
        screenOptions={{headerShown: false}}>
        {token ? (
          <>
            <Stack.Screen name="LoggedIn" component={Main} />
          </>
        ) : (
          <>
            <Stack.Screen name="LoggedOut" component={Initial} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
