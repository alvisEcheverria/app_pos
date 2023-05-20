import { createSlice } from '@reduxjs/toolkit';

export const orderIdSlice = createSlice({
    name: 'orderId',
    initialState: {},
    reducers: {
        setOrderId: (state, action) =>{
            return action.payload;
        }
    }
})

export const { setOrderId } = orderIdSlice.actions;

export default orderIdSlice.reducer;
