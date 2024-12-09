import { createSlice } from '@reduxjs/toolkit';

const loaderSlice = createSlice({
  name: 'loader',
  initialState: {
    loading: false,
  },
  reducers: {
    loadingOn: (state, action) => {
      state.loading = true;
      state.loadingType = action?.payload?.type ?? 'default';
      state.loadingMessage = action?.payload?.message;
    },
    loadingOff: (state) => {
      state.loading = false;
      state.loadingType = null;
      state.loadingMessage = null;
    },
  },
});

export default loaderSlice.reducer;
export const { loadingOn, loadingOff } = loaderSlice.actions;
