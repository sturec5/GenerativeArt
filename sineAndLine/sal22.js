let x = 0;
let y = 0;
let spacing = 10;
let offset = 0;
let strokeCol;

let colorPalette = [
  [1, 22, 39],
  [253, 255, 252],
  [46, 196, 182],
  [231, 29, 54],
  [255, 159, 28],
];

function setup() {
  createCanvas(400, 400);
  strokeCol = color(colorPalette[0]);
}

function draw() {
  background(colorPalette[0]);

  for (let i = 0; i < width; i += spacing) {
    for (let j = 0; j < height; j += spacing) {
      let angle = offset + i * 0.1 + j * 0.1;
      let x2 = i + spacing * cos(angle);
      let y2 = j + spacing * sin(angle);
      strokeWeight(2);
      stroke(
        lerpColor(color(colorPalette[2]), color(colorPalette[3]), j / height)
      );
      line(i, j, x2, y2);
    }
  }

  offset += 0.1;
}

function keyPressed() {
  if (keyCode === UP_ARROW) {
    spacing += 1;
  } else if (keyCode === DOWN_ARROW) {
    spacing -= 1;
  }
}
