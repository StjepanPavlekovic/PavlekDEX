import React from "react";
import "./pokemon-info.style.scss";

const PokemonInfo = ({ pokemon, clearPokemon }) => {
  var imgUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`;
  var height = pokemon.height / 10;
  var weight = pokemon.weight / 10;
  return (
    <div className="info-popup">
      <div className="popup-background">
        <div className="btn-close" onClick={clearPokemon}></div>
        <div
          className="rounded-container-larger"
          style={
            pokemon.id < 10091
              ? { backgroundImage: `url(${imgUrl})` }
              : { backgroundImage: `url('missingno.png')` }
          }
        ></div>
        <div className="info">
          <h2>
            {pokemon.forms[0].name.charAt(0).toUpperCase() +
              pokemon.forms[0].name.slice(1)}
          </h2>
          <div>
            <span>Ability: </span>
            <span>
              {pokemon.abilities[0].ability.name.charAt(0).toUpperCase() +
                pokemon.abilities[0].ability.name.slice(1)}
            </span>
          </div>
          <div>
            <span>Base EXP: </span>
            <span>{pokemon.base_experience}</span>
          </div>
          <table className="dimensions-table">
            <thead>
              <tr>
                <th>Height</th>
                <th>Weight</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{height} m</td>
                <td>{weight} kg</td>
              </tr>
            </tbody>
          </table>
          <table>
            <thead>
              <tr>
                <th>HP</th>
                <th>ATK</th>
                <th>DEF</th>
                <th>SP.ATK</th>
                <th>SP.DEF</th>
                <th>SPD</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{pokemon.stats[0].base_stat}</td>
                <td>{pokemon.stats[1].base_stat}</td>
                <td>{pokemon.stats[2].base_stat}</td>
                <td>{pokemon.stats[3].base_stat}</td>
                <td>{pokemon.stats[4].base_stat}</td>
                <td>{pokemon.stats[5].base_stat}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default PokemonInfo;
