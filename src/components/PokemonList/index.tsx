import { PokemonDto } from "../../modules/list";
import "./index.css";


interface Props {
  pokemons: PokemonDto[];
  onSelect: (name: string) => void;
}

export const PokemonList: React.FC<Props> = ({
  pokemons, onSelect,
}) => {
  return (
    <div className="pokemonListOuter">
      {pokemons.map(pokemon => (
        <div
          key={pokemon.name}
          className="pokemonListItem"
          onClick={() => onSelect(pokemon.name)}
        >
          {pokemon.name}
        </div>
      ))}
    </div>
  );
};
