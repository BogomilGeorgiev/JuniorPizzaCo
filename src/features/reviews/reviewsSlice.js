import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    reviews: [
        {
            user: 'Bogomil',
            comment: 'You have the best pizzas!',
            rating: 5,
        },
        {
            user: 'John',
            comment: 'It was fine!',
            rating: 4,
        },
        {
            user: 'Greg',
            comment: 'You are the best!',
            rating: 4,
        },
        {
            user: 'Michael',
            comment: 'You have the best pizzas ever!',
            rating: 5,
        },
        {
            user: 'Joey',
            comment: 'Amazing quality!',
            rating: 5,
        },
    ],

}




const reviewSlice = createSlice({
    name: 'reviews',
    initialState,
    reducers: {
        addReview(state, action) {
            state.reviews.push(action.payload);

        }
    }
})


export const { addReview } = reviewSlice.actions;

export const getReviews = (state) => state.reviews.reviews;

export default reviewSlice.reducer;