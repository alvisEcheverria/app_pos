import { createSlice } from '@reduxjs/toolkit';

export const genOrderSlice = createSlice({
    name: 'genOrder',
    initialState: {},
    reducers: {
        setGenOrder: (state, action)=>{
            return action.payload;
        }
    }
})

export const { setGenOrder } = genOrderSlice.actions;

export default genOrderSlice.reducer;
