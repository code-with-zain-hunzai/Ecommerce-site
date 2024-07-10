import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './features/cartSlice'
import loadingReducer from './features/productSlice';
import productReducer from './features/productSlice'

export const store = configureStore({
    reducer: {
        cartReducer,
        productReducer,
        loadingReducer
    },
    devTools:process.env.NODE_ENV !== "production"
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
