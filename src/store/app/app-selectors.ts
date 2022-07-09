import { createSelector } from "@reduxjs/toolkit";

const ip = (state: any) => state.app.ip;

export const ipSelector = createSelector(ip, (ip) => ip);
