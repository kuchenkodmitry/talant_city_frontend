import axios from '../../axios/axios'
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const fetchSchedule = createAsyncThunk("schedule/fetchSchedule", async () => {
    const { data } = await axios.get('/curses/timetable/?format=json')
    return data
})


const initialState = {
    schedule: {
        items: [],
        status: 'loading',
    }
}



const scheduleSlice = createSlice({
    name: 'schedule',
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder.addCase(fetchSchedule.pending, (state) => {
            state.schedule.status = 'loading';
            state.schedule.items = [];
        });

        builder.addCase(
            fetchSchedule.fulfilled,
            (state, action) => { //Если загрузилось, то прописываем в айтемст, что есть action.payload fullfieled если успешно все загрузилось 
                state.schedule.items = action.payload;
                state.schedule.status = 'loaded';
            }
        );

        builder.addCase(fetchSchedule.rejected, (state) => { // rejected - если ошибка
            state.schedule.items = [];
            state.schedule.status = 'error';
        });
    }
})

export const { addProducts, increment, decrement, deletProduct } = scheduleSlice.actions;

export const scheduleReducer = scheduleSlice.reducer