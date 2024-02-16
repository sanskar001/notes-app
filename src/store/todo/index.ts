import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "@/store";

export interface Todo {
  id: string;
  text: string;
  isDone: boolean;
  reminderTime: Date | null;
}

export type TodoList = Array<Todo>;

interface TodoState {
  todoList: TodoList;
}

const initialState: TodoState = {
  todoList: [],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<Todo>) => {
      state.todoList.push(action.payload);
    },
  },
});

export const { addTodo } = todoSlice.actions;

export const selectTodoList = (state: RootState) => state.todo.todoList;

export default todoSlice.reducer;
