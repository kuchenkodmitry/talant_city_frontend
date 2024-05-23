import { configureStore } from '@reduxjs/toolkit'
import { booksReducer } from './slices/books';
import { cursesReducer } from './slices/courses';
import { superMemoryReducer } from './slices/superMemory';
import { scheduleReducer } from './slices/schedule'
import { modalReducer } from './slices/modal';
import { generatedСommentlReducer } from './slices/generatedcomment';
import { postReducer } from './slices/post';
import { videosReducer } from './slices/videos'
import { trainersReducer } from './slices/trainers';
import { reviewsReducer } from './slices/reviews';
import { TabsReducer } from './slices/tab_id';

const Store = configureStore({
    reducer: {
        books: booksReducer,
        courses: cursesReducer,
        superMemory: superMemoryReducer,
        schedule: scheduleReducer,
        modal: modalReducer,
        generatedСomment: generatedСommentlReducer,
        post: postReducer,
        videos: videosReducer,
        trainers: trainersReducer,
        reviews: reviewsReducer,
        tabs: TabsReducer
    }
});

export default Store;