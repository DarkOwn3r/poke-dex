import expIcon from "../assets/exp-icon.svg?raw";
import heightIcon from "../assets/height-icon.svg?raw";
import weightIcon from "../assets/weight-icon.svg?raw";
import pokeballIcon from "../assets/pokeball-icon.svg?raw";
import { renderType } from "./renderType.js";

const container = document.querySelector(".container");

export function renderPokeCard(data) {
  const pokeName = data.name;
  const id = data.id;
  const exp = data.base_experience;
  const height = data.height;
  const weight = data.weight;
  const types = data.types.map((item) => renderType(item.type.name)).join("");
  const pokeImage = data.sprites.other.home.front_default;
  const html = /* html */ `<div class="card">

    <div class="title">
      <h1>${pokeballIcon} ${pokeName}</h1>
      <h4>#${id}</h4>
    </div>

    <div class="pokemon-data">

      <div class="pokemon">
        <img src="${pokeImage}" alt="${pokeName}">
      </div>

      <div class="data">
        <div class="item exp">${expIcon} ${exp}</div>
        <div class="item height">${heightIcon} ${height}</div>
        <div class="item weight">${weightIcon} ${weight}</div>
      </div>

      <div class="types">
        ${types}
      </div>

    </div>
  </div>`;

  const position = "beforeEnd";
  container.insertAdjacentHTML(position, html);
}
