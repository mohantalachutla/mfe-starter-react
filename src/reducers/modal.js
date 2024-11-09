import { createSlice } from "@reduxjs/toolkit";

import { BANNER_TYPES, MODAL_TYPES } from "../constants";

const MODAL_DEFAULTS = {
  display: false,
  type: MODAL_TYPES.DEFAULT,
  header: "",
  body: "",
  footer: "",
};

const BANNER_DEFAULTS = {
  display: false,
  message: "",
  type: BANNER_TYPES.SUCCESS,
};

const modalSlice = createSlice({
  name: "modal",
  initialState: {
    modal: MODAL_DEFAULTS,
    banner: BANNER_DEFAULTS,
  },
  reducers: {
    showModal: (state, action) => {
      state.modal.body = action?.payload?.body;
      state.modal.header = action?.payload?.header;
      state.modal.footer = action?.payload?.footer;
      state.modal.display = true;
    },
    hideModal: (state) => {
      state.modal = MODAL_DEFAULTS;
    },
    showBanner: (state, action) => {
      state.banner.message = action?.payload?.message;
      state.banner.type = action?.payload?.type;
      state.banner.display = true;
    },
    showError: (state, action) => {
      state.banner.message = action?.payload?.message;
      state.banner.type = BANNER_TYPES.ERROR;
      state.banner.display = true;
    },
    hideBanner: (state) => {
      state.banner = BANNER_DEFAULTS;
    },
  },
});

export default modalSlice.reducer;
export const { showModal, hideModal, showBanner, showError, hideBanner } =
  modalSlice.actions;
