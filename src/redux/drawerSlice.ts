import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IDrawerProps } from "../interfaces";

const initialState: IDrawerProps = {
  isOpen: false,
  drawerWidth: 240,
};

const drawerSlice = createSlice({
  name: "drawer",
  initialState,
  reducers: {
    setDrawerOpen: (state, action: PayloadAction<boolean>) => {
      state.isOpen = action.payload;
    },
  },
});

export const { setDrawerOpen } = drawerSlice.actions;
export default drawerSlice.reducer;
