import { createSlice } from '@reduxjs/toolkit';

const helloSlice = createSlice({
  name: 'hello',
  initialState: {
    message: null,
  },
  reducers: {
    helloSuccess: (state, action) => {
      state.message = action.payload.message;
    },
    helloFailure: (state) => {
      state.message = '';
    },
  },
});

export default helloSlice.reducer;
export const { helloSuccess, helloFailure } = helloSlice.actions;
