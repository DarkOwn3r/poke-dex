import { renderPokeCard } from "./modules/renderPokeCard.js";
import { renderFx } from "./modules/renderFx.js";

const promises = [];

async function getPokemon(id) {
  const URL = `https://pokeapi.co/api/v2/pokemon/${id}`;
  const promise = await fetch(URL)
    .then((response) => response.json())
    .then((data) => {
      renderPokeCard(data);
    });
  promises.push(promise);
}

for (let i = 1; i < 152; i++) {
  getPokemon(i);
}

Promise.all(promises)
  .then((responses) => {
    renderFx();
  });
