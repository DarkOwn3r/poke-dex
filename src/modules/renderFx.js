import VanillaTilt from "vanilla-tilt";
import ColorThief from "colorthief/dist/color-thief.mjs";

function renderColor() {
  const colorThief = new ColorThief();
  const images = document.querySelectorAll(".image");

  images.forEach(img => {
    if (img.complete) {
      const [r, g, b] = colorThief.getColor(img);
      const color = `rgb(${r} ${g} ${b})`;
      img.style.setProperty("--color", color);
    } else {
      img.addEventListener("load", function () {
        colorThief.getColor(img);
      });
    }
  });
}

function renderTilt() {
  const cards = document.querySelectorAll(".card");
  VanillaTilt.init(cards, {
    max: 25,
    speed: 400,
    glare: true
  });
}

export function renderFx() {
  renderTilt();
  renderColor();
}
