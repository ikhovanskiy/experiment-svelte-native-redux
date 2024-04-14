import { createReducer, type PayloadAction } from "@reduxjs/toolkit";
import {
  setColor1,
  setColor2,
  setColor3,
  setColor4,
} from "../actions/appActions";
import { StartColors } from "$lib/enum";

interface AppStateAppReducer {
  colors: {
    color1: string;
    color2: string;
    color3: string;
    color4: string;
  };
}

export const initialStateAppReducer: AppStateAppReducer = {
  colors: {
    color1: StartColors.COLOR_1,
    color2: StartColors.COLOR_2,
    color3: StartColors.COLOR_3,
    color4: StartColors.COLOR_4,
  },
};

const appReducer = createReducer(initialStateAppReducer, (builder) => {
  builder
    .addCase(setColor1, (state, action) => {
      state.colors.color1 = action.payload ?? "";
    })
    .addCase(setColor2, (state, action) => {
      state.colors.color2 = action.payload ?? "";
    })
    .addCase(setColor3, (state, action) => {
      state.colors.color3 = action.payload ?? "";
    })
    .addCase(setColor4, (state, action) => {
      state.colors.color4 = action.payload ?? "";
    });
});

export default appReducer;
