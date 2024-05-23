import axios from '../../axios/axios'
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const fetchTrainers = createAsyncThunk("trainers/fetchTrainers", async () => {
    const { data } = await axios.get('/trainer/?format=json')
    return data
})


const initialState = {
    trainers: {
        items: [],
        status: 'loading',
    }
}



const trainersSlice = createSlice({
    name: 'trainers',
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder.addCase(fetchTrainers.pending, (state) => {
            state.trainers.status = 'loading';
            state.trainers.items = [];
        });

        builder.addCase(
            fetchTrainers.fulfilled,
            (state, action) => { //Если загрузилось, то прописываем в айтемст, что есть action.payload fullfieled если успешно все загрузилось 
                state.trainers.items = action.payload;
                state.trainers.status = 'loaded';
            }
        );

        builder.addCase(fetchTrainers.rejected, (state) => { // rejected - если ошибка
            state.trainers.items = [];
            state.trainers.status = 'error';
        });
    }
})

// export const { addProducts, increment, decrement, deletProduct } = trainersSlice.actions;

export const trainersReducer = trainersSlice.reducer