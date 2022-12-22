import { Component } from 'react';

export default class PokemonInfo extends Component {
  state = {
    pokemon: null,
    loading: false,
    error: null,
  };
  componentDidUpdate(prevProps, prevState) {
    const prevName = prevProps.pokemonName;
    const nextName = this.props.pokemonName;

    if (prevName !== nextName) {
      this.setState({ loading: true });
      fetch(`https://pokeapi.co/api/v2/pokemon/${this.props.pokemonName}`)
        .then(res => res.json())
        .then(pokemon => this.setState({ pokemon }))
        .catch(error => this.setState({ error }))
        .finally(() => this.setState({ loading: false }));
    }
  }

  render() {
    const { pokemon, loading, error } = this.state;
    return (
      <div>
        {error && (
          <p>
            Все пропала такого покимона с именем {this.props.pokemonName} нет!
          </p>
        )}
        {loading && <div>Загружаем...</div>}
        {!pokemon && <div>Введите имя покемона</div>}
        {pokemon && (
          <div>
            <p>{pokemon.name}</p>
            <img
              src={pokemon.sprites.other['official-artwork'].front_default}
              alt={pokemon.name}
              width="200"
            />
          </div>
        )}
      </div>
    );
  }
}
