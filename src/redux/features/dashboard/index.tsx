/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../../redux/store";
import { IPayment } from "../../../pages/dashboard/types.interface";

// Define the initial state type
const initialState: IPayment[] = [];

// Create the slice
const paymentSlice = createSlice({
  name: "payment",
  initialState,
  reducers: {
    // Use PayloadAction with IPayment[] type to ensure type safety
    AddPayment: (state, action: PayloadAction<IPayment[]>) => {
      return action.payload; // Replace the state with the new array
    },
  },
});

// Export actions
export const { AddPayment } = paymentSlice.actions;

// Export the reducer
export default paymentSlice.reducer;

// Selector to get payments from the store
export const getPaymentFromStore = (state: RootState) => state.payment;
