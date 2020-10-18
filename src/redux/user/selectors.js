import { createSelector } from "@reduxjs/toolkit";

const rootSelector = (state) => state.user;

export const userSelector = createSelector(rootSelector, (user) => user);

export const isCurrentUserPresentSelector = createSelector(
  userSelector,
  (user) => user.id !== null
);
