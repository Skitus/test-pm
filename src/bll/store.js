import { configureStore } from '@reduxjs/toolkit';
import candidates from "./listOfCandidates/listOfCandidates.slice";

export const store = configureStore({
    reducer: {
        candidates
    },
});

export default store;