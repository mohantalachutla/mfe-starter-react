import { createSlice } from "@reduxjs/toolkit";

const helloSlice = createSlice({
  name: "hello",
  initialState: {
    message: null,
  },
  reducers: {
    setMessage: (state, action) => {
      state.message = action.payload.message;
    },
  },
});

export default helloSlice.reducer;
export const { setMessage } = helloSlice.actions;
