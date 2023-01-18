import { configureStore } from '@reduxjs/toolkit';
import { createAction, createReducer } from '@reduxjs/toolkit';
// import { rootReducer } from './reducer';

export const addContact = createAction('contact/addContact');
export const removeContact = createAction('contact/removeContact');
export const findContact = createAction('contact/findContact');

const myReducer = createReducer(0, {
  [addContact]: (state, action) => state + action.payload,
  [removeContact]: (state, action) => state - action.payload,
  [findContact]: (state, action) => state + action.payload,
});

export const store = configureStore({
  reducer: {
    myValue: myReducer,
  },
});
