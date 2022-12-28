import React, { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './index.css';
import PokemonForm from 'Components/Pokemon/FormPokemon';
import PokemonInfo from 'Components/Pokemon/PokemonInfo';

export default class App extends Component {
  state = {
    pokemonName: '',
  };

  handlerFormSubmit = pokemonName => {
    this.setState({ pokemonName });
    console.log(pokemonName);
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
      </div>
    );
  }
}
// import { useState, useEffect } from 'react';

// const App = () => {
//   const [value, setValue] = useState(0);

//   useEffect(() => {
//     document.title = `You clicked ${value} times`;
//   });

//   return (
//     <div>
//       <p>You clicked {value} times</p>
//       <button onClick={() => setValue(value + 1)}>Click me</button>
//       <button onClick={() => setValue(value - 1)}>Click me</button>
//     </div>
//   );
// };

// export default App;
