import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  emailAddress: "",
  phoneNumber: "",
  pricePlan: {},
  addOns: [],
  pricingMonthly: true,
};

const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    getInfo(state, action) {
      state.name = action.payload.name;
      state.emailAddress = action.payload.emailAddress;
      state.phoneNumber = action.payload.phoneNumber;
    },
    getPlan(state, action) {
      state.pricePlan = action.payload;
    },
    setPricing(state) {
      state.pricingMonthly = !state.pricingMonthly;
    },
    getAddOns(state, action) {
      const { id } = action.payload;
      if (state.addOns.find((item) => item.id === id)) {
        state.addOns = state.addOns.filter((addOn) => addOn.id !== id);
      } else {
        state.addOns.push(action.payload);
      }
    },
  },
});

export const { getInfo, getPlan, setPricing, getAddOns } = formSlice.actions;
export default formSlice.reducer;
