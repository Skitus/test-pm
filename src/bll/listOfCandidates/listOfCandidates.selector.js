import { createSelector } from 'reselect';

export const candidatesSelector = createSelector(
    (state) => state,
    (state) => state.candidates,
);