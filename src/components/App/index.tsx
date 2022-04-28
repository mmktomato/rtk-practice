import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { ListConditionSelect } from "../ListConditionSelect";
import { PokemonList } from "../PokemonList";
import { PokemonDetail } from "../PokemonDetail";
import "./index.css";
import { usePokemonSelector, PokemonDispatch } from "../../modules/store";
import { fetchPokemons, setConditionCount } from "../../modules/list";
import { fetchPokemon } from "../../modules/detail";


export const App: React.FC = () => {
  const { dispatch, condition, pokemons, selectedPokemon } = useApp();

  return (
    <div className="outer">
      <ListConditionSelect
        condition={condition}
        onChange={count => dispatch(setConditionCount(count))}
      />
      <PokemonList
        pokemons={pokemons}
        onSelect={name => dispatch(fetchPokemon(name))}
      />
      {selectedPokemon && (
        <PokemonDetail pokemon={selectedPokemon} />
      )}
    </div>
  )
};

const useApp = () => {
  const dispatch = useDispatch<PokemonDispatch>();
  const { condition, pokemons, selectedPokemon } = usePokemonSelector(state => ({
    condition: state.list.condition,
    pokemons: state.list.pokemons,
    selectedPokemon: state.detail.selectedPokemon,
  }));

  useEffect(() => {
    dispatch(fetchPokemons(condition));
  }, [condition]);

  return {
    dispatch, condition, pokemons, selectedPokemon,
  };
};
