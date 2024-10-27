import { configureStore } from '@reduxjs/toolkit';
import subRedditReducer from '../features/slices/subRedditSlice';
import activeRedditPostReducer from '../features/slices/postSlice';

export const store = configureStore({
    reducer: {
        allSubReddit: subRedditReducer,
        activeRedditPost: activeRedditPostReducer
    },
});