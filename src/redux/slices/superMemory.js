import axios from '../../axios/axios';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchSuperMemory = createAsyncThunk("super_memory/fetchSuperMemory", async () => {
    const { data } = await axios.get('/super_memory/?format=json')
    return data
})


const initialState = {
    superMemory: {
        items: [],
        status: 'loading',
    }
}



const superMemorySlice = createSlice({
    name: 'superMemory',
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder.addCase(fetchSuperMemory.pending, (state) => {
            state.superMemory.status = 'loading';
            state.superMemory.items = [];
        });

        builder.addCase(
            fetchSuperMemory.fulfilled,
            (state, action) => { //Если загрузилось, то прописываем в айтемст, что есть action.payload fullfieled если успешно все загрузилось 
                state.superMemory.items = action.payload;
                state.superMemory.status = 'loaded';
            }
        );

        builder.addCase(fetchSuperMemory.rejected, (state) => { // rejected - если ошибка
            state.superMemory.items = [];
            state.superMemory.status = 'error';
        });
    }
})

export const { addProducts, increment, decrement, deletProduct } = superMemorySlice.actions;

export const superMemoryReducer = superMemorySlice.reducer