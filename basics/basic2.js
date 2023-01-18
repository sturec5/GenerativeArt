const tileSize = 50;
const numTiles = 10;

const colors = ["#ffbe0b", "#fb5607", "#ff006e", "#8338ec", "#3a86ff"];
let direction = "right";

function setup() {
  createCanvas(numTiles * tileSize, numTiles * tileSize);
  noStroke();
}

function draw() {
  clear();

  for (let i = 0; i < numTiles; i++) {
    for (let j = 0; j < numTiles; j++) {
      let x = i * tileSize;
      let y = j * tileSize;

      fill(random(colors));
      stroke(random(colors));
      strokeWeight(3);

      rect(x, y, tileSize, tileSize);

      if (random() < 0.1) {
        direction = random(["up", "down", "left", "right"]);
      }

      switch (direction) {
        case "up":
          y -= tileSize;
          break;
        case "down":
          y += tileSize;
          break;
        case "left":
          x -= tileSize;
          break;
        case "right":
          x += tileSize;
          break;
      }
    }
  }
}
