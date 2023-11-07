// registrationSlice.ts
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import { auth } from '../../../lib/firbase';


export const registerUser = createAsyncThunk('user/registerUser', async ({ email, password }: { email: string, password: string }) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    return userCredential.user.email;
  } catch (error) {
    throw error;
  }
});
export const loginUser = createAsyncThunk('user/loginUser', async ({ email, password }: { email: string, password: string }) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    return userCredential.user.email;
  } catch (error) {
    throw error;
  }
});


export const signInWithGoogle = createAsyncThunk('user/signInWithGoogle', async () => {
    try {
      const provider = new GoogleAuthProvider();
      const userCredential = await signInWithPopup(auth, provider);
      return userCredential.user.email;
    } catch (error) {
      throw error;
    }
  });



  export const logoutUser = createAsyncThunk('user/logoutUser', async () => {
    try {
      await signOut(auth);
      return null; // Successful logout
    } catch (error) {
      throw error;
    }
  });



const registrationSlice = createSlice({
  name: 'user',
  initialState: {
    user: null as string | null,
    isLoading: false,
    isError: false,
    error: null as string | null,
  },
  reducers: {
    setUser:(state,action)=>{
        state.user = action.payload
    },
     setLoading:(state,action)=>{
        state.isLoading = action.payload
     }
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.error = null;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoading = false;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.user = null;
        state.isError = true;
        state.error = action.error.message!;
        state.isLoading = false;
      })
      .addCase(loginUser.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoading = false;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.user = null;
        state.isError = true;
        state.error = action.error.message!;
        state.isLoading = false;
      })
      .addCase(signInWithGoogle.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.error = null;
      })
      .addCase(signInWithGoogle.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoading = false;
      })
      .addCase(signInWithGoogle.rejected, (state, action) => {
        state.user = null;
        state.isError = true;
        state.error = action.error.message!;
        state.isLoading = false;
      }).addCase(logoutUser.fulfilled, (state) => {
        state.user = null;
      })
      .addCase(logoutUser.rejected, (state, action) => {
        state.user = null;
        state.isError = true;
        state.error = action.error.message!;
      });
  },
});



export const { setUser,setLoading } = registrationSlice.actions;

export default registrationSlice.reducer;
