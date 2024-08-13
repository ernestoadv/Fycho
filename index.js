import App from './src/App';
import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';

/**
 * This component renders a greeting to the user.
 *
 * @param {string} name The user's name.
 * @returns {ReactNode} A React element that renders a greeting to the user.
 */
AppRegistry.registerComponent(appName, () => App);
