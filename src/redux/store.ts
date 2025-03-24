import { configureStore } from "@reduxjs/toolkit";
import loadingReducer from "./loadingSlice";
import snackBarReducer from "./snackBarSlice";
import drawerReducer from "./drawerSlice";

export const store = configureStore({
  reducer: {
    loading: loadingReducer,
    snackBar: snackBarReducer,
    drawer: drawerReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
