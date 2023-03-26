import {createSlice} from '@reduxjs/toolkit';
import {createAsyncThunk} from '@reduxjs/toolkit';

interface CounterState {
  value: number;
  status: 'idle' | 'loading' | 'failed';
}

const initialState: CounterState = {
  value: 0,
  status: 'idle',
};

export const incrementAsync = createAsyncThunk(
  'counter/incrementAsync',
  async (amount: number) => {
    await new Promise<void>(resolve => setTimeout(resolve, 1000));
    return amount;
  },
);

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: state => {
      state.value += 1;
    },
    decrement: state => {
      state.value -= 1;
    },
  },
  extraReducers: {
    [`${incrementAsync.pending}`]: state => {
      state.status = 'loading';
      console.log('incrementAsync : pending, state.status : loading');
    },

    [`${incrementAsync.fulfilled}`]: (state, action) => {
      state.status = 'idle';
      console.log('incrementAsync : fulfilled, state.status : idle');
      state.value += action.payload;
    },
  },
});

export const {increment, decrement} = counterSlice.actions;

export const selectCount = (state: {counter: CounterState}) =>
  state.counter.value;

export default counterSlice.reducer;
