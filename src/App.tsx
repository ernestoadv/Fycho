/**
 * @packageDocumentation
 * Module responsible of rendering the application.
 */
import {Provider} from 'react-redux';
import Screen from './utils/screenManager';
import store from './store/store';
import './style/global.css';

/**
 * This component renders the application wrapped on a redux store and a navigator.
 * @returns {React.JSX.Element} A React element that renders the application.
 */
function App() {
  return (
    <Provider store={store}>
      <Screen />
    </Provider>
  );
}

export default App;
