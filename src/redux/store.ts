import { configureStore } from "@reduxjs/toolkit";
import { loadState } from "../localStorage";
import categorySlice from "./category-slice";
import currentCategorySlice from "./currentCategory-slice";
import filterCategorySlice from "./filterCategory-slice";
import todoSlice from "./todo-slice";

const store = configureStore({
  reducer: {
    categories: categorySlice.reducer,
    todos: todoSlice.reducer,
    currentCategory: currentCategorySlice.reducer,
    filter: filterCategorySlice.reducer
  },
  preloadedState: loadState(),
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
