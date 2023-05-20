import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const getOrderSlice = createSlice({
    name: 'getOrder',
    initialState: [],
    reducers: {
        setGetOrder: (state, action)=>{
            return action.payload;
        }
    }
})

export const getOrderThunk = (orderId) => dispatch => {
    if(orderId){
        return axios.get(`http://localhost:8000/api/v1/orders/${orderId}`)
        .then(res => dispatch(setGetOrder(res.data)))
        .catch(error => console.log(error.response))  
    }
    else{
        dispatch(setGetOrder([]));
    }
    
}

export const { setGetOrder } = getOrderSlice.actions;

export default getOrderSlice.reducer;
