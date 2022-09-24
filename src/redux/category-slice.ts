import { ICategoryTodo } from "./interfaces/interfaces";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: ICategoryTodo[] = [];

const categorySlice = createSlice({
  name: "category",
  initialState: initialState,
  reducers: {
    addCategory(state, action: PayloadAction<ICategoryTodo>) {
      const newCategory = action.payload;
      const existingCategory = state.find(
        (item: ICategoryTodo) => item.name === newCategory.name
      );
      if (!existingCategory) {
        state.push(action.payload);
      } else {
        return state;
      }
    },
    removeCategory(state, action: PayloadAction<string>) {
      const categoryIndex = state.findIndex(
        (category) => category.id === action.payload
      );
      state.splice(categoryIndex, 1);
    }
  },
});

export const categoryActions = categorySlice.actions;

export default categorySlice;
