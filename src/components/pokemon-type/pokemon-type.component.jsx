import React, { Component } from "react";
import "./pokemon-type.style.scss";

export default class PokemonType extends Component {
  _isMounted = false;

  constructor(props) {
    super(props);

    this.state = {
      id: props.pokemonId,
      types: [],
      loaded: null,
    };
  }

  componentDidMount() {
    this._isMounted = true;

    fetch(`https://pokeapi.co/api/v2/pokemon/${this.state.id}`)
      .then((res) => res.json())
      .then((data) => {
        if (this._isMounted) {
          this.setState((state, props) => {
            return {
              types: data.types,
              loaded: true,
            };
          });
        }
      });
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  render() {
    return (
      <div className="types-container">
        {!this.state.loaded ? <div className="loader"></div> : null}
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
