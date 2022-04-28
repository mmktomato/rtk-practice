import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


export interface Pokemon {
  name: string;
  imageUrl: string;
}

interface PokemonDetailResponse {
  name: string;
  sprites: {
    front_default: string;
  };
}


// state

interface DetailState {
  selectedPokemon?: Pokemon;
}

const initialState: DetailState = {
  selectedPokemon: undefined,
};


// actions

export const fetchPokemon = createAsyncThunk("detail/fetchPokemons", async (name: string) => {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
  return (await res.json()) as PokemonDetailResponse;
});


// slice

const detailSlice = createSlice({
  name: "detail",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchPokemon.fulfilled, (state, action) => {
      state.selectedPokemon = {
        name: action.payload.name,
        imageUrl: action.payload.sprites.front_default,
      };
    });
    builder.addCase(fetchPokemon.rejected, (state, action) => {
      state.selectedPokemon = undefined;
      console.error(action.error);
    });
  }
});

export const reducer = detailSlice.reducer;
