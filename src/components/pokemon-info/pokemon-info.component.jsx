import React from "react";
import "./pokemon-info.style.scss";

const PokemonInfo = (props) => {
  return (
    <div className="info-popup">
      <div className="popup-background">
        <div className="btn-close"></div>
        <div className="rounded-container-larger"></div>
        <div className="info">
          <h2>Arceus</h2>
          <div>
            <span>Ability: </span>
            <span>Multitype</span>
          </div>
          <div>
            <span>Base EXP: </span>
            <span>999</span>
          </div>
          <table className="dimensions-table">
            <tr>
              <th>Height</th>
              <th>Weight</th>
            </tr>
            <tr>
              <td>32 ft</td>
              <td>3200 lbs</td>
            </tr>
          </table>
          <table>
            <tr>
              <th>HP</th>
              <th>ATK</th>
              <th>DEF</th>
              <th>SP.ATK</th>
              <th>SP.DEF</th>
              <th>SPD</th>
            </tr>
            <tr>
              <td>120</td>
              <td>120</td>
              <td>120</td>
              <td>120</td>
              <td>120</td>
              <td>120</td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
};

export default PokemonInfo;
