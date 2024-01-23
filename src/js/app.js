import Goblin from "./game/game.js";

document.addEventListener("DOMContentLoaded", () => {
  const playingArea = new Goblin(document.querySelector(".playing-field"));

  setInterval(playingArea.randomMoving, 1000);
});
