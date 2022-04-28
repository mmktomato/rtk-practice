import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";


export interface PokemonDto {
  name: string;
}

interface PokemonListResponse {
  results: PokemonDto[];
}


// state

export interface ListCondition {
  count: number;
}

interface ListState {
  pokemons: PokemonDto[];
  condition: ListCondition;
}

const initialState: ListState = {
  pokemons: [],
  condition: {
    count: 3,
  },
};


// actions

export const fetchPokemons = createAsyncThunk("list/fetchPokemons", async (condition: ListCondition) => {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${condition.count}`);
  return (await res.json()) as PokemonListResponse;
});


// slice

const listSlice = createSlice({
  name: "list",
  initialState,
  reducers: {
    setConditionCount(state, action: PayloadAction<number>) {
      state.condition.count = action.payload;
    },
  },
  extraReducers: builder => {
    builder.addCase(fetchPokemons.fulfilled, (state, action) => {
      state.pokemons = action.payload.results;
    });
    builder.addCase(fetchPokemons.rejected, (state, action) => {
      state.pokemons = [];
      console.error(action.error);
    });
  },
});

export const reducer = listSlice.reducer;
export const { setConditionCount } = listSlice.actions;
