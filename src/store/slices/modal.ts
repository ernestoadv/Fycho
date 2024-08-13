/**
 * @packageDocumentation
 * Slice responsible for the management of modals.
 */
import {Modal} from '../../types/enums';
import {PayloadAction, createSlice} from '@reduxjs/toolkit';
import {RootState} from '../store';

/**
 * @notExported
 * Defines the state of the modal slice.
 */
interface State {
  /**
   * Current modal's identifier. Null to display no modal.
   */
  display: boolean;
  /**
   * Current modal's identifier. Null to display no modal.
   */
  modal: Modal | null;
  /**
   * Current modal's parameters.
   */
  params: {[key: string]: unknown};
}

/**
 * Slice's initial state. No modal will be set yet.
 */
const initialState: State = {
  display: false,
  modal: null,
  params: {},
};

/**
 * Slice initialization.
 */
const slice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    clearModal: state => {
      state.display = false;
      state.modal = null;
      state.params = {};
    },
    setDisplay: (state, action: PayloadAction<boolean>) => {
      state.display = action.payload;
    },
    setModal: (state, action: PayloadAction<Modal>) => {
      state.display = false;
      state.modal = action.payload;
      state.params = {};
    },
    setParams: (state, action: PayloadAction<{[key: string]: unknown}>) => {
      state.params = action.payload;
    },
  },
});

const {
  /**
   * Reducer actions as defined in 'reducers' at 'createSlice'.
   */
  actions,
  /**
   * Slice's reducer. To be accessible it needs to be added to the store's configuration.
   */
  reducer: modalReducer,
} = slice;

export const {
  /**
   * Closes the current modal without replacing it.
   */
  clearModal,
  /**
   * Sets the modal display mode so that is hidden or visible.
   */
  setDisplay,
  /**
   * Sets the modal based on the payload, replacing the previous modal if required.
   */
  setModal,
  /**
   * Sets the modal parameters.
   */
  setParams,
} = actions;

/**
 * Allows access to the modal state from any component.
 */
export const modalSelector = (state: RootState) => state.modal;

export default modalReducer;
