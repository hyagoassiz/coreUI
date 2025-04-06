import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUser } from "../interfaces";

const initialState: IUser = {
  uid: "",
  displayName: "",
  email: "",
  emailVerified: false,
  isAnonymous: false,
  metadata: { creationTime: undefined, lastSignInTime: undefined },
  photoURL: "",
  phoneNumber: null,
  providerData: [],
  providerId: "",
  refreshToken: "",
  tenantId: null,
  delete: async () => Promise.resolve(),
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  getIdToken: async (_forceRefresh?: boolean) => Promise.resolve(""),
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  getIdTokenResult: async (_forceRefresh?: boolean) =>
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    Promise.resolve({} as any),
  reload: async () => Promise.resolve(),
  toJSON: () => ({}),
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (_state, action: PayloadAction<IUser>) => {
      return action.payload;
    },
    clearUser: () => {
      return initialState;
    },
  },
});

export const { setUser, clearUser } = userSlice.actions;
export default userSlice.reducer;
