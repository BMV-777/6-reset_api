import React, { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import PokemonForm from 'Components/Pokemon/FormPokemon';
import PokemonInfo from 'Components/Pokemon/PokemonInfo';

export default class App extends Component {
  state = {
    pokemonName: '',
  };

  handlerFormSubmit = pokemonName => {
    this.setState({ pokemonName });
    // console.log(pokemonName);
  };
  // state = {
  //   pokemon: null,
  //   loading: false,
  // };

  // componentDidMount() {
  //   this.setState({ loading: true });
  //   setTimeout(() => {
  //     fetch('https://pokeapi.co/api/v2/pokemon/ditto')
  //       .then(res => res.json())
  //       .then(pokemon => this.setState({ pokemon }))
  //       .finally(() => this.setState({ loading: false }));
  //   }, 2000);
  // }

  render() {
    return (
      <div stled={{ maxWidth: 1170, margin: '0 auto', padding: 20 }}>
        <PokemonForm onSubmit={this.handlerFormSubmit} />
        <PokemonInfo pokemonName={this.state.pokemonName} />
        <ToastContainer autoClose={5000} theme="colored" />
        {/* {this.state.loading && <h1>Загрузка....</h1>}
        {this.state.pokemon && this.state.pokemon.name} */}
        let num1 = 10; let num2 =12; console.log(num1,num2)
      </div>
    );
  }
}
