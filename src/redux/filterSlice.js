import { createSlice } from '@reduxjs/toolkit';

export const myFilterSlice = createSlice({
  name: 'filter',
  initialState: {
    filter: '',
  },
  reducers: {
    contactFilter(state, action) {
      return {
        state,
        filter: action.payload,
      };
    },
  },
});
export const { contactFilter } = myFilterSlice.actions;
