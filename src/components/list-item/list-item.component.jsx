import React from "react";
import PokemonType from "../pokemon-type/pokemon-type.component";
import "./list-item.style.scss";
//import "./bkp.scss";

const ListItem = (props) => {
  var name = props.name.charAt(0).toUpperCase() + props.name.slice(1);
  var onClick = (id) => {
    window.open(`https://pokeapi.co/api/v2/pokemon/${id}`);
  };
  var imgUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${props.id}.png`;
  return (
    <div onClick={() => onClick(props.id)} className="list-item">
      <div className="larger-rounded-container"></div>
      <div
        className="rounded-container"
        style={
          props.id < 10091
            ? { backgroundImage: `url(${imgUrl})` }
            : { backgroundImage: `url('missingno.png')` }
        }
      ></div>
      <div className="name-container">
        <span className="listItem-name">{name}</span>
        <PokemonType pokemonId={props.id} />
      </div>
    </div>
  );
};

export default ListItem;
