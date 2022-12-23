import ImagError from '../../error.png';
export default function PokemonErrorView({ message }) {
  return (
    <div role="alert">
      <img src={ImagError} width="240" alt="sadcat" />
      {message}
    </div>
  );
}
