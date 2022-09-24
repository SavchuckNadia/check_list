import { ICurrentCategory } from "./interfaces/interfaces";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: ICurrentCategory = {
  name: "",
};

const currentCategorySlice = createSlice({
  name: "currentCategory",
  initialState: initialState,
  reducers: {
    changeCurrentCategory(
      state: ICurrentCategory,
      action: PayloadAction<string>
    ) {
      state.name = action.payload;
    },
  },
});

export const currentCategoryActions = currentCategorySlice.actions;

export default currentCategorySlice;
