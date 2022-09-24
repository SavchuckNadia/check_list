import { IFilter} from "./interfaces/interfaces";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: IFilter = {
  query: "",
};

const filterCategorySlice = createSlice({
  name: "filterCategory",
  initialState: initialState,
  reducers: {
    setFilterCategory(
      state: IFilter,
      action: PayloadAction<string>
    ) {
      state.query = action.payload;
    },
  },
});

export const filterCategoryActions = filterCategorySlice.actions;

export default filterCategorySlice;
