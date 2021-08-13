import { configureStore } from "@reduxjs/toolkit";
import logger from 'redux-logger';      // allows user to see store in console
import { questionReducer } from "../reducers/question_reducer";

export const configureAppStore = preloadedState => {
    const store = configureStore({
        reducer: questionReducer,
        middleware: getDefaultMiddleware => getDefaultMiddleware()
            .concat(process.env.NODE_ENV !== 'production' ? logger : []),
        preloadedState
    })

    return store;
}