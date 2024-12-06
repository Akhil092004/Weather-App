import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    status:'idle',
    data:null,
    error:null
}


const weatherSlice = createSlice({
    name:"weather",
    initialState,
    reducers: {
        startFetch(state) {
          state.status = 'loading';
          state.error = null;
        },
        fetchSuccess(state, action) {
          state.status = 'succeeded';
          state.weatherData = action.payload;
        },
        fetchFailure(state, action) {
          state.status = 'failed';
          state.error = action.payload;
        },
    },
})

export const {startFetch,fetchSuccess,fetchFailure} = weatherSlice.actions;

export default weatherSlice.reducer;