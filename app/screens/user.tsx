/**
 * @packageDocumentation
 * This component allows to navigate between different pages via tabs.
 * These screens are accesible when using a logged user.
 */
import {Icon} from '@defs/enums';
import {Platform, StyleSheet} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import IconManager from '@utils/iconManager';
import useLiterals from '@hooks/useLiterals';

/**
 * Navigable pages
 */
import Calendar from '@components/pages/calendar';
import Home from '@components/pages/home';
import Settings from '@components/pages/settings';
import useStyle from '../hooks/useStyle';

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
  /**
   * Hooks
   */
  const literals = useLiterals();
  const style = useStyle((theme, window) => {
    return StyleSheet.create({
      tabBarStyle: {
        backgroundColor: theme.tabs.background,
        borderTopWidth: 0,
        paddingBottom: Platform.OS === 'web' ? 20 : 0,
      },
      tabBarIconActive: {
        color: theme.tabs.icon.active,
      },
      tabBarIconInactive: {
        color: theme.tabs.icon.inactive,
      },
    });
  });

  return (
    <Tab.Navigator
      initialRouteName={literals.home.title}
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarActiveTintColor: style.tabBarIconActive.color,
        tabBarInactiveTintColor: style.tabBarIconInactive.color,
        tabBarShowLabel: false,
        tabBarStyle: style.tabBarStyle,
        tabBarIcon: ({focused}) => {
          let color = focused
            ? style.tabBarIconActive.color
            : style.tabBarIconInactive.color;
          let icon = undefined;
          switch (route.name) {
            case literals.calendar.title:
              icon = Icon.Clock;
              break;
            case literals.home.title:
              icon = Icon.Home;
              break;
            case literals.settings.title:
              icon = Icon.Settings;
              break;
          }
          return <IconManager id={icon} color={color} fill={focused} />;
        },
      })}>
      <Tab.Screen
        component={Calendar}
        name={literals.calendar.title}
        options={{}}
      />
      <Tab.Screen component={Home} name={literals.home.title} options={{}} />
      <Tab.Screen
        component={Settings}
        name={literals.settings.title}
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
      screenOptions={{animation: 'none', headerShown: false}}>
      <>
        <Stack.Screen name="User" component={Tabs} />
      </>
    </Stack.Navigator>
  );
}
