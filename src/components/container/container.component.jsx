import React, { Component } from "react";
import ListItem from "../list-item/list-item.component";
import "./container.style.scss";

export default class Container extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pokemon: [],
      next: null,
      previous: null,
    };
  }

  initialLoad = () => {
    fetch(
      this.state.previous
        ? this.state.next
        : "https://pokeapi.co/api/v2/pokemon"
    )
      .then((res) => res.json())
      .then((data) => {
        this.setState((state, props) => {
          return {
            pokemon: data.results,
            next: data.next,
            previous: data.previus,
          };
        });
      });
  };

  loadSet = (setToLoad) => {
    fetch(setToLoad ? this.state.next : this.state.previous)
      .then((res) => res.json())
      .then((data) => {
        this.setState((state, props) => {
          return {
            pokemon: data.results,
            next: data.next,
            previous: data.previous,
          };
        });
      });
  };

  componentDidMount() {
    this.initialLoad();
  }

  extractKey(str) {
    return str.split("/")[6];
  }

  render() {
    return (
      <div className="container-wrap">
        <div className="controls">
          {this.state.previous ? (
            <button
              className="controls-button"
              onClick={() => this.loadSet(false)}
            >
              Previous
            </button>
          ) : null}

          {this.state.next ? (
            <button
              className="controls-button"
              onClick={() => this.loadSet(true)}
            >
              Next
            </button>
          ) : null}
        </div>
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
