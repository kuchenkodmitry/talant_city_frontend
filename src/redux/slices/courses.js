import axios from '../../axios/axios'
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const fetchcCurses = createAsyncThunk("curses/fetchCurses", async () => {
    const { data } = await axios.get('/curses/?format=json')
    return data
})


const initialState = {
    curses: {
        items: [],
        status: 'loading',
    }
}



const cursesSlice = createSlice({
    name: 'courses',
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder.addCase(fetchcCurses.pending, (state) => {
            state.curses.status = 'loading';
            state.curses.items = [];
        });

        builder.addCase(
            fetchcCurses.fulfilled,
            (state, action) => { //Если загрузилось, то прописываем в айтемст, что есть action.payload fullfieled если успешно все загрузилось 
                state.curses.items = action.payload;
                state.curses.status = 'loaded';
            }
        );

        builder.addCase(fetchcCurses.rejected, (state) => { // rejected - если ошибка
            state.curses.items = [];
            state.curses.status = 'error';
        });
    }
})

export const { addProducts, increment, decrement, deletProduct } = cursesSlice.actions;

export const cursesReducer = cursesSlice.reducer