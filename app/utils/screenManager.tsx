/**
 * @packageDocumentation
 * This module selects and renders a page component, being a page an instance of a template.
 */
import {NavigationIndependentTree} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import {userSelector} from '@store/slices/user';

/**
 * Navigable screens
 */
import Anonymous from '@screens/anonymous';
import User from '@screens/user';

/**
 * This component selects and renders the page the user has navigated to.
 * All navigable screens are listed under the Stack's and Tab's navigators.
 * Protected routes pattern is followed: https://reactnavigation.org/docs/auth-flow/
 * @returns {React.JSX.Element} A React element that renders a page.
 */
export default function ScreenManager() {
  const {token} = useSelector(userSelector);
  return (
    <NavigationIndependentTree>
      {token ? <User /> : <Anonymous />}
    </NavigationIndependentTree>
  );
}
