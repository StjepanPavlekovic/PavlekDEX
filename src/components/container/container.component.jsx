import React, { Component } from "react";
import ListItem from "../list-item/list-item.component";
import "./container.style.scss";

export default class Container extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pokemon: [],
      currentPage: 0,
    };
  }

  componentDidMount() {
    fetch("https://pokeapi.co/api/v2/pokemon")
      .then((res) => res.json())
      .then((data) => {
        this.setState((state, props) => {
          return {
            pokemon: data.results,
          };
        });
      });
  }

  extractKey(str) {
    return str.split("/")[6];
  }

  render() {
    return (
      <div className="container-wrap">
        <div className="list-container">
          {this.state.pokemon.map((e) => {
            var key = this.extractKey(e.url);
            return <ListItem name={e.name} id={key} key={key} />;
          })}
        </div>
      </div>
    );
  }
}
