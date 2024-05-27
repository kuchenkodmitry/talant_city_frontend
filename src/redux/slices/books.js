import axios from '../../axios/axios'
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const fetchBooks = createAsyncThunk("books/fetchBooks", async () => {
    const { data } = await axios.get('/books/?format=json')
    return data
})


const initialState = {
    books: {
        items: [],
        status: 'loading',
    }
}



const booksSlice = createSlice({
    name: 'books',
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder.addCase(fetchBooks.pending, (state) => {
            state.books.status = 'loading';
            state.books.items = [];
        });

        builder.addCase(
            fetchBooks.fulfilled,
            (state, action) => { //Если загрузилось, то прописываем в айтемст, что есть action.payload fullfieled если успешно все загрузилось 
                state.books.items = action.payload;
                state.books.status = 'loaded';
            }
        );

        builder.addCase(fetchBooks.rejected, (state) => { // rejected - если ошибка
            state.books.items = [];
            state.books.status = 'error';
        });
    }
})

export const { addProducts, increment, decrement, deletProduct } = booksSlice.actions;

export const booksReducer = booksSlice.reducer