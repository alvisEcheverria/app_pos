import { configureStore } from '@reduxjs/toolkit'
import roleSlice from './slices/role.slice'
import genOrderSlice from './slices/genOrder.slice'
import orderIdSlice from './slices/orderId.slice'
import getOrderSlice from './slices/getOrder.slice'

export default configureStore({
  reducer: {
        role: roleSlice,
        genOrder: genOrderSlice,
        orderId: orderIdSlice,
        getOrder: getOrderSlice
	}
})