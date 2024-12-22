import { createSlice } from '@reduxjs/toolkit';

import { ALERT_TYPES, BANNER_TYPES, MODAL_TYPES } from '../constants';

const MODAL_DEFAULTS = {
  display: false,
  type: MODAL_TYPES.DEFAULT,
  data: '',
};

const BANNER_DEFAULTS = {
  display: false,
  message: '',
  type: BANNER_TYPES.SUCCESS,
};

const ALERT_DEFAULTS = {
  display: false,
  message: '',
  type: BANNER_TYPES.SUCCESS,
};

const modalSlice = createSlice({
  name: 'modal',
  initialState: {
    modal: MODAL_DEFAULTS,
    banner: BANNER_DEFAULTS,
    alert: ALERT_DEFAULTS,
  },
  reducers: {
    showModal: (state, action) => {
      const {
        type = MODAL_TYPES.DEFAULT,
        dismissible = true,
        ...payload
      } = action?.payload ?? {};
      if (type === MODAL_TYPES.DEFAULT) {
        state.modal.data = action?.payload?.data;
      } else {
        state.modal.data = payload.data; // for customized modals
      }
      state.modal.type = type;
      state.modal.display = true;
      state.modal.dismissible = dismissible;
    },
    hideModal: (state) => {
      state.modal = MODAL_DEFAULTS;
    },
    showBanner: (state, action) => {
      state.banner.message = action?.payload?.message;
      state.banner.type = action?.payload?.type ?? BANNER_TYPES.SUCCESS;
      state.banner.display = true;
    },
    showAlert: (state, action) => {
      state.alert.message = action?.payload?.message;
      state.alert.type = action?.payload?.type ?? ALERT_TYPES.SUCCESS;
      state.alert.display = true;
    },
    hideAlert: (state) => {
      state.alert = ALERT_DEFAULTS;
    },
    hideBanner: (state) => {
      state.banner = BANNER_DEFAULTS;
    },
  },
});

export default modalSlice.reducer;
export const {
  showModal,
  hideModal,
  showBanner,
  hideBanner,
  showAlert,
  hideAlert,
} = modalSlice.actions;
