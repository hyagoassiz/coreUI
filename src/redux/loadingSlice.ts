import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ILoading } from "../interfaces";

const initialState: ILoading = {
  loading: false,
};

const loadingSlice = createSlice({
  name: "loading",
  initialState,
  reducers: {
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
  },
});

export const { setLoading } = loadingSlice.actions;
export default loadingSlice.reducer;
