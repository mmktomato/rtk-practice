import { configureStore } from "@reduxjs/toolkit";
import { useSelector, TypedUseSelectorHook } from "react-redux";

import { myMiddleware } from "./middleware";
import { reducer as listReducer } from "./list";
import { reducer as detailReducer } from "./detail";


export const pokemonStore = configureStore({
  reducer: {
    list: listReducer,
    detail: detailReducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(myMiddleware);
  },
});

type PokemonState = ReturnType<typeof pokemonStore.getState>;
export type PokemonDispatch = typeof pokemonStore.dispatch;
export const usePokemonSelector: TypedUseSelectorHook<PokemonState> = useSelector;
