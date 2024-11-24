import { createAction } from "@reduxjs/toolkit";

export const helloAction = createAction("hello/request", (payload) => ({
  payload,
}));
