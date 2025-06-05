import AsyncStorage from "@react-native-async-storage/async-storage";
import { createSlice } from "@reduxjs/toolkit";
import { register, signIn,   getUserById } from "../thunk/authThunk";
import { postCourier } from "../thunk/courierThunk";

const initialState = {
  user: null,
  couriers: [],
  loading: false,
  errorMessage: null,
  //   accessToken: null,
  userCoordinate: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logoutUser: () => {
      AsyncStorage.removeItem("user_id");
      console.log("User logged out successfully");
      return initialState; 
    },
    // New reducer to update userCoordinate
    updateUserCoordinate: (state, action) => {
      state.userCoordinate = action.payload; // Update userCoordinate with the payload
    },
  },
  extraReducers: (builder) => {
    builder
      // Sign In
      .addCase(signIn.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(signIn.fulfilled, (state, action) => {
        state.loading = false;
        console.log("User = ", action.payload);
        state.user = action?.payload?.data;
      })
      .addCase(signIn.rejected, (state, action) => {
        state.loading = false;
        state.error = action?.payload?.message;
      })

      // register
      .addCase(register.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.loading = false;
        console.log("User = ", action.payload);
        state.user = action?.payload?.data;
      })
      .addCase(register.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload.message;
      })

      // Restore user
      .addCase(getUserById.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getUserById.fulfilled, (state, action) => {
        state.loading = false;
        console.log("User = ", action.payload);
        state.user = action?.payload?.data;
      })
      .addCase(getUserById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload.message;
      });

      //  Courier
    builder.addCase(postCourier.pending, (state) => {
      state.loading = true;
      state.error = null;
    })
    .addCase(postCourier.fulfilled, (state, action) => {
      state.loading = false;
      console.log("Courier posted successfully", action?.payload?.data);
      state.couriers.push(action.payload.data); // Assuming payload contains the new courier data
    })
    .addCase(postCourier.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload.message;
    });
  },
});

export const {
  setAuthLoaderFalse,
  logoutUser,
  signUpUser,
  updateUserCoordinate,
} = authSlice.actions;

export default authSlice.reducer;
