import axios from '../../axios/axios'
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const fetchvideos = createAsyncThunk("videos/fetchvideos", async () => {
    const { data } = await axios.get('/curses/video/?format=json')
    return data
})


const initialState = {
    videos: {
        items: [],
        status: 'loading',
    }
}



const videosSlice = createSlice({
    name: 'videos',
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder.addCase(fetchvideos.pending, (state) => {
            state.videos.status = 'loading';
            state.videos.items = [];
        });

        builder.addCase(
            fetchvideos.fulfilled,
            (state, action) => { //Если загрузилось, то прописываем в айтемст, что есть action.payload fullfieled если успешно все загрузилось 
                state.videos.items = action.payload;
                state.videos.status = 'loaded';
            }
        );

        builder.addCase(fetchvideos.rejected, (state) => { // rejected - если ошибка
            state.videos.items = [];
            state.videos.status = 'error';
        });
    }
})

// export const { addProducts, increment, decrement, deletProduct } = videosSlice.actions;

export const videosReducer = videosSlice.reducer