import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ISnackBar } from "../interfaces";

const initialState: ISnackBar = {
  message: "",
  type: "success",
  open: false,
};

type SnackBarPayload = Omit<ISnackBar, "open">;

const snackBarSlice = createSlice({
  name: "snackBar",
  initialState,
  reducers: {
    showSnackBar: (_, action: PayloadAction<SnackBarPayload>): ISnackBar => {
      return {
        message: action.payload.message,
        type: action.payload.type,
        open: true,
      };
    },
    closeSnackBar: (state): void => {
      state.open = false;
    },
  },
});

export const { showSnackBar, closeSnackBar } = snackBarSlice.actions;
export default snackBarSlice.reducer;
