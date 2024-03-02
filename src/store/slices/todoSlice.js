import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getTodosAPI } from '../../api';

const SLICE_NAME = 'todo';

export const getTodos = createAsyncThunk(
  `${SLICE_NAME}/getTodos`,
  async (payload, thunkAPI) => {
    try {
      const data = await getTodosAPI();
      return data;
    } catch (err) {
      const { rejectWithValue } = thunkAPI;
      return rejectWithValue(err);
    }
  }
);

const todosSlice = createSlice({
  name: SLICE_NAME,
  initialState: {
    todos: [],
    isFetching: false,
    error: null,
  },
  reducers: {
    addTodo: (state, action) => {
      state.todos.push(action.payload);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getTodos.pending, (state, action) => {
      state.isFetching = true;
    });
    builder.addCase(getTodos.fulfilled, (state, action) => {
      state.isFetching = false;
      state.todos = action.payload;
    });
    builder.addCase(getTodos.rejected, (state, action) => {
      state.isFetching = false;
      state.error = action.payload;
    });
  },
});

const { reducer, actions } = todosSlice;
export const { addTodo } = actions;
export default reducer;
