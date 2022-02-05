import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import httpService from "../../httpService/httpService";

export const fetchCandidates = createAsyncThunk(
    'candidates/fetchCandidates',
    async ({candidatesCurrentPage, candidatesIsPhoto}) => await httpService.getCandidates(candidatesCurrentPage, candidatesIsPhoto),
);

export const candidates = createSlice({
    name: 'candidates',
    initialState: {
        candidates: [],
        candidatesIsLoading: true,
        candidatesCurrentPage: 1,
        candidatesPageCount: 10,
        candidatesTotalCount: 0,
        candidatesIsPhoto: false,
    },
    reducers: {
        setCurrentPageCandidate(state, action) {
            state.candidatesCurrentPage = action.payload;
        },

        toggleIsPhoto(state, action) {
            state.candidatesIsPhoto = action.payload;
        }
    },
    extraReducers: {
        [fetchCandidates.pending]: (state, action) => {
            state.candidatesIsLoading = true;
        },
        [fetchCandidates.fulfilled]: (state, action) => {
            state.candidates = action.payload.results;
            state.candidatesIsLoading = false;
            state.candidatesPageCount = action.payload.page_count;
            state.candidatesTotalCount = action.payload.total_count;
        },
        [fetchCandidates.rejected]: (state, action) => {
            state.candidatesIsLoading = false;
        },
    },
});

export default candidates.reducer;

export const { setCurrentPageCandidate, toggleIsPhoto } = candidates.actions;