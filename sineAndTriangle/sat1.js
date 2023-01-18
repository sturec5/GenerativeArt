const numTriangles = 50;
const triangleSize = 50;
const speed = 0.05;
const colorPalette = [
  [1, 22, 39],
  [253, 255, 252],
  [46, 196, 182],
  [231, 29, 54],
  [255, 159, 28],
];

let angle = 0;

function setup() {
  createCanvas(600, 600);
  noStroke();
  fill(255);
}

function draw() {
  background(1, 22, 39);

  createRows(11);

  angle += speed;
}

function createRows(numRows) {
  for (let j = 0; j < numRows; j++) {
    for (let i = 0; i < numTriangles; i++) {
      let posX = triangleSize * i + triangleSize / 2;
      let posY =
        triangleSize * j +
        triangleSize / 2 +
        (sin(angle + i) * triangleSize) / 2;

      let colorIndex = Math.floor(Math.random() * colorPalette.length);
      fill(colorPalette[colorIndex]);

      triangle(
        posX,
        posY,
        posX - triangleSize / 2,
        posY + triangleSize,
        posX + triangleSize / 2,
        posY + triangleSize
      );
    }
  }
}
