/**
 * @packageDocumentation
 * Custom redux store responsible of managing the global state of the application.
 */
import {configureStore} from '@reduxjs/toolkit';
import modalReducer from './slices/modal';
import userReducer from './slices/user';

/**
 * Instance of a configured redux store that sets up a default middleware and reducers.
 */
const store = configureStore({
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
  reducer: {
    modal: modalReducer,
    user: userReducer,
  },
});

/**
 * Defines the root state of the current store for slices to create a custom selector.
 */
export type RootState = ReturnType<typeof store.getState>;

/**
 * Defines the store action dispatcher that allows triggering state changes.
 */
export type AppDispatch = typeof store.dispatch;

export default store;
