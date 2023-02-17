import { configureStore } from '@reduxjs/toolkit';
import darkModeReducer from './redux/darkModeSlice';
import isMobileReducer from './redux/isMobileSlice';
import mobileMenuOpenReducer from './redux/mobileMenuOpenSlice';
import activePageReducer from './redux/activePageSlice';
import apiDataReducer from './redux/apiDataSlice';
import currentCompanyDataReducer from './redux/currentCompanyDataSlice';

export const store = configureStore({
    reducer: {
        darkMode: darkModeReducer,
        isMobile: isMobileReducer,
        mobileMenuOpen: mobileMenuOpenReducer,
        activePage: activePageReducer,
        apiData: apiDataReducer,
        currentCompanyData: currentCompanyDataReducer,
    },
});