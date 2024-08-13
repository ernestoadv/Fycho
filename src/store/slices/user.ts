/**
 * @packageDocumentation
 * Slice responsible for the management of the user information.
 */
import {PayloadAction, createSlice} from '@reduxjs/toolkit';
import {RootState} from '../store';

/**
 * @notExported
 * Defines the state of the user slice.
 */
interface State {
  /**
   * Current user's token.
   */
  token?: string;
}

/**
 * Slice's initial state. Initial is the first page to load.
 */
const initialState: State = {
  token: undefined,
};

/**
 * Slice initialization.
 */
const slice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    clearUser: state => {
      state.token = undefined;
    },
    setUser: (state, action: PayloadAction<State>) => {
      state.token = action.payload.token;
    },
  },
});

const {
  /**
   * Reducer actions as defined in 'reducers' at 'createSlice'.
   */
  actions,
  /**
   * Slice's reducer. To be accessible, it needs to be added to the store's configuration.
   */
  reducer: userReducer,
} = slice;

export const {
  /**
   * Clears the user's data.
   */
  clearUser,
  /**
   * Sets the user's data.
   */
  setUser,
} = actions;

/**
 * Allows access to the current page from any component.
 */
export const userSelector = (state: RootState) => state.user;

export default userReducer;
