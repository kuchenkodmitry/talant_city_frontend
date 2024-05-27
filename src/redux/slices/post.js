import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

const initialState = {
    post: {
        isOpen: false,
        courseId: 1
    }
}

const postSlice = createSlice({
    name: 'post',
    initialState,
    reducers: {
        openPost: (state) => {
            state.post.isOpen = true
        }, 
        closePost: (state) => {
            state.post.isOpen = false
        },
        addCuorseId: (state, action) => {
            state.post.courseId = action.payload
        }
    }})

    export const { openPost, closePost, addCuorseId } = postSlice.actions;
    export const postReducer = postSlice.reducer