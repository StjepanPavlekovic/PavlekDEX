import React, { Component } from "react";
import "./pokemon-type.style.scss";

export default class PokemonType extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: props.pokemonId,
      types: [],
    };
  }

  componentDidMount() {
    fetch(`https://pokeapi.co/api/v2/pokemon/${this.state.id}`)
      .then((res) => res.json())
      .then((data) => {
        this.setState((state, props) => {
          return {
            types: data.types,
          };
        });
      });
  }

  render() {
    return (
      <div className="types-container">
        {this.state.types.map((e) => {
          return (
            <div className={`type ${e.type.name}`} key={e.type.name}>
              {e.type.name.toUpperCase()}
            </div>
          );
        })}
      </div>
    );
  }
}
