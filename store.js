import { configureStore } from '@reduxjs/toolkit';
import darkModeReducer from './redux/darkModeSlice';
import isMobileReducer from './redux/isMobileSlice';

export const store = configureStore({
    reducer: {
        darkMode: darkModeReducer,
        isMobile: isMobileReducer,
    },
});