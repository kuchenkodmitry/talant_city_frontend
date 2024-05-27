import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

const initialState = {
    message: {
        data: "",
        time: '',
        city: '',
        courseName: '',
        defaultCourse: null
    }
}

const generatedСommentSlice = createSlice({
    name: 'generatedСomment',
    initialState,
    reducers: {
        generatСomment: (state, action) => {
            state.message = action.payload
        }
    }})

    export const { generatСomment } = generatedСommentSlice.actions;
    export const generatedСommentlReducer = generatedСommentSlice.reducer