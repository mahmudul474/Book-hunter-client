import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../lib/firbase";

interface Iuser {
  user: {
    email: string | null;
  };
  isLoading: boolean;
  isError: boolean;
  error: null;
}
const initialStates: Iuser = {
  user: {
    email: null,
  },
  isLoading: false,
  isError: false,
  error: null,
};

interface IInitialUser {
  email: string;
  password: string;
}

export  const createUser = createAsyncThunk(
  "user/createUser",
  async ({ email, password }: IInitialUser) => {
    const data = await createUserWithEmailAndPassword(auth, email, password);
     return data.user.email
  }
);

const userSlice = createSlice({
  name: "user",
  initialState: initialStates,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(createUser.pending,(state)=>{
      state.isLoading=true
      state.isError=false
      state.error=null
    }).addCase(createUser.fulfilled, (state,action)=>{
     
      state.user.email=action.payload
      state.isLoading=false
    }).addCase(createUser.rejected, (state, action)=>{
      state.user.email=null 
state.isError=true
      state.isLoading=false
    });
  }
});

export default userSlice.reducer;
