import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface actionType {
  type: string;
  payload: any;
}
interface stateType {
  auth: any;
  ip: null | string;
}

const initialState: stateType = {
  auth: null,
  ip: null,
};

export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    updateIp: (state: stateType, action: actionType) => {
      state.ip = action.payload;
    },
  },
});

export const { updateIp } = appSlice.actions;

export default appSlice.reducer;
