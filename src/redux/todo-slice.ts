import { ITodo } from "./interfaces/interfaces";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: ITodo[] = [];

const todoSlice = createSlice({
  name: "todos",
  initialState: initialState,
  reducers: {
    addTodo(state, action: PayloadAction<ITodo>) {
      const newTodo = action.payload;
      const existingTodo = state?.find(
        (item: ITodo) =>
          item.name === newTodo.name && item.category === newTodo.category
      );

      if (existingTodo) {
        return state;
      } else {
        state.push(action.payload);
      }
    },
    toggleTodo(state, action: PayloadAction<ITodo>) {
      let completedTodo: ITodo | any = state?.find(
        (item: ITodo) => item.id === action.payload.id
      );
      completedTodo.completed = !completedTodo?.completed;
    },
    removeTodo(state, action: PayloadAction<ITodo>) {
      const todoIndex = state.findIndex(
        (todo) => todo.id === action.payload.id
      );
      state.splice(todoIndex, 1);
    },
    removeAllWithCategory(state, action: PayloadAction<ITodo[]>) {
      const todosId = action.payload.map((todo) => todo.id);

      todosId.forEach((ID) => {
        const todoIndex = state.findIndex((todo) => ID === todo.id);
        state.splice(todoIndex, 1);
      });
    },
  },
});

export const todoActions = todoSlice.actions;

export default todoSlice;
