import { Pokemon } from "../../modules/detail";
import "./index.css";


interface Props {
  pokemon: Pokemon;
}

export const PokemonDetail: React.FC<Props> = ({
  pokemon,
}) => {
  return (
    <div className="pokemonDetailOuter">
      <img
        className="pokemonDetailImage"
        src={pokemon.imageUrl}
        alt={pokemon.name}
      />
    </div>
  );
};
