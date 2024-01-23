export default class Goblin {
  randomMoving() {
    const goblinImg = document.createElement("img");
    goblinImg.classList.add("game_item_img");
    goblinImg.src = "img/goblin.png";

    const itemsCollection = document.querySelectorAll(".game_item");

    for (const element of itemsCollection) {
      if (element.firstElementChild) {
        element.firstElementChild.remove();
      }
    }

    const randomelement = Math.floor(Math.random() * itemsCollection.length);

    itemsCollection[randomelement].append(goblinImg);
  }
}
