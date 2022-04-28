import { configureStore } from "@reduxjs/toolkit";
import { useSelector, TypedUseSelectorHook } from "react-redux";

import { reducer as listReducer } from "./list";
import { reducer as detailReducer } from "./detail";


export const pokemonStore = configureStore({
  reducer: {
    list: listReducer,
    detail: detailReducer,
  }
});

type PokemonState = ReturnType<typeof pokemonStore.getState>;
export type PokemonDispatch = typeof pokemonStore.dispatch;
export const usePokemonSelector: TypedUseSelectorHook<PokemonState> = useSelector;
