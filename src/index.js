import { renderPokeCard } from "./modules/renderPokeCard.js";
import VanillaTilt from "vanilla-tilt";

const promises = [];

function getPokemon(id) {
  const URL = `https://pokeapi.co/api/v2/pokemon/${id}`;
  const promise = fetch(URL)
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
    const cards = document.querySelectorAll(".card");
    VanillaTilt.init(cards, {
      max: 25,
      speed: 400,
      glare: true
    });
  });
