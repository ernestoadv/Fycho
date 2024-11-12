/**
 * @packageDocumentation
 * This component allows to navigate between different pages via tabs.
 * These screens are accesible when using a logged user.
 */
import {Icon} from '../types/enums';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import IconManager from '../utils/iconManager';
import useTheme from '../hooks/useTheme';
import useTranslation from '../hooks/useTranslation';

/**
 * Navigable pages
 */
import Calendar from '../components/pages/calendar';
import Home from '../components/pages/home';
import Profile from '../components/pages/profile';

/**
 * User stack
 */
const Stack = createNativeStackNavigator();

/**
 * Tab stack
 */
const Tab = createBottomTabNavigator();

/**
 * Menu tab navigator: https://reactnavigation.org/docs/tab-based-navigation/
 * This component renders a view with several toggle buttons that serve
 * as a quick access to different pages.
 *
 * @returns Tab navigator that allows switching between certain pages.
 */
function Tabs() {
  const literals = useTranslation();
  const theme = useTheme();
  return (
    <Tab.Navigator
      initialRouteName={literals.home.title}
      screenOptions={({route}) => ({
        headerShadowVisible: false,
        headerStyle: {
          backgroundColor: theme.menu.background,
        },
        headerTitleAlign: 'left',
        headerTitleStyle: {
          color: theme.menu.title,
          fontSize: 40,
          fontWeight: 'bold',
          left: 8,
          position: 'absolute',
          top: 36,
        },
        tabBarActiveTintColor: theme.menu.icon.active,
        tabBarInactiveTintColor: theme.menu.icon.inactive,
        tabBarStyle: {
          backgroundColor: theme.menu.background,
          borderTopColor: theme.menu.border,
          borderTopWidth: 0,
          height: 82,
        },
        tabBarIcon: ({focused}) => {
          let color = theme.menu.icon[focused ? 'active' : 'inactive'];
          let icon = undefined;
          switch (route.name) {
            case literals.calendar.title:
              icon = Icon.Calendar;
              break;
            case literals.home.title:
              icon = Icon.Home;
              break;
            case literals.profile.title:
              icon = Icon.Profile;
              break;
          }
          return <IconManager color={color} icon={icon} />;
        },
      })}>
      <Tab.Screen
        component={Calendar}
        name={literals.calendar.title}
        options={{}}
      />
      <Tab.Screen component={Home} name={literals.home.title} options={{}} />
      <Tab.Screen
        component={Profile}
        name={literals.profile.title}
        options={{}}
      />
    </Tab.Navigator>
  );
}

/**
 * Stack that provides access to user pages only.
 *
 * @returns Stack navigator that allows switching between certain pages.
 */
export default function User() {
  return (
    <Stack.Navigator
      initialRouteName={'User'}
      screenOptions={{headerShown: false}}>
      <>
        <Stack.Screen name="User" component={Tabs} />
      </>
    </Stack.Navigator>
  );
}
