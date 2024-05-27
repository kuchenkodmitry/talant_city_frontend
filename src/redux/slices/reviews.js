import axios from '../../axios/axios'
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const fetchReviews = createAsyncThunk("reviews/fetchReviews", async () => {
    const { data } = await axios.get('/curses/reviews/?format=json')
    return data
})


const initialState = {
    reviews: {
        items: [],
        status: 'loading',
    }
}



const reviewsSlice = createSlice({
    name: 'reviews',
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder.addCase(fetchReviews.pending, (state) => {
            state.reviews.status = 'loading';
            state.reviews.items = [];
        });

        builder.addCase(
            fetchReviews.fulfilled,
            (state, action) => { //Если загрузилось, то прописываем в айтемст, что есть action.payload fullfieled если успешно все загрузилось 
                state.reviews.items = action.payload;
                state.reviews.status = 'loaded';
            }
        );

        builder.addCase(fetchReviews.rejected, (state) => { // rejected - если ошибка
            state.reviews.items = [];
            state.reviews.status = 'error';
        });
    }
})

// export const { addProducts, increment, decrement, deletProduct } = reviewsSlice.actions;

export const reviewsReducer = reviewsSlice.reducer