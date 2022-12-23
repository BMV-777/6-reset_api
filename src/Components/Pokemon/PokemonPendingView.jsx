import { ImSpinner } from 'react-icons/im';
import PokemonDateView from './PokemonDateView';
import pendingImage from '../../loading.png';
import '../../index.css';

const style = {};

export default function PokemonPendingView({ pokemonName }) {
  const pokemon = {
    name: pokemonName,
    sprites: {
      other: {
        'official-artwork': {
          front_default: pendingImage,
        },
      },
    },
    stats: [],
  };

  return (
    <div role="alert">
      <div style={style.spinner}>
        <ImSpinner size="32" className="icon-spin" />
        Загружаем...
      </div>
      <PokemonDateView pokemon={pokemon} />
    </div>
  );
}
