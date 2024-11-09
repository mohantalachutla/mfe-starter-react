import { createAction } from "@reduxjs/toolkit";

export const hello = createAction("HELLO_SAGA", (payload) => payload);
