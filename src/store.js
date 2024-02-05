import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./features/user/userSlice";
import cartReducer from './features/cart/cartSlice';
import reviewsReducer from './features/reviews/reviewsSlice';

const store = configureStore({
    reducer: {
        user: userReducer,
        cart: cartReducer,
        reviews: reviewsReducer
    }
})

export default store;