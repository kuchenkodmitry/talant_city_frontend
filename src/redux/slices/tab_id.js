import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

const initialState = {
    tab_id: 0
}

const TabsSlice = createSlice({
    name: 'generatedСomment',
    initialState,
    reducers: {
        changeTabId: (state, action) => {
            state.tab_id = action.payload
        }
    }})

    export const { changeTabId } = TabsSlice.actions;
    export const TabsReducer = TabsSlice.reducer