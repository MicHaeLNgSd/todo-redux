import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const SLICE_NAME = 'todo';

const fetchTodos = createAsyncThunk(
  `${SLICE_NAME}/fetchTodos`,
  (payload, thunkAPI) => {}
);

const todos = createSlice({
  name: SLICE_NAME,
  initialState: {},
  reducers: {},
  extraReducers: {},
});
