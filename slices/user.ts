import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { User } from ".prisma/client";

const testUser: User = {
  id: "123",
  avatar: "",
  createdAt: new Date(),
  updatedAt: new Date(),
  email: "email@example.com",
  password: "hello",
  name: "John Doe",
  username: "johndoe",
  role: "ADMIN",
};

const initialState: { user: User | null } = {
    user: null,
//   user: testUser,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    set_user: (state, action: PayloadAction<User>) => {
      state.user = action.payload;
    },
    remove_user: (state) => {
      state.user = null;
    },
  },
});

export const { set_user, remove_user } = userSlice.actions;
export default userSlice.reducer;
