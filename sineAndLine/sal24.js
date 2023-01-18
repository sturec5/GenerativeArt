let angle = 0;
let lineLength = 200;
let lineThickness = 10;
let speed = 0.05;
let numLines = 15;
let palette = [
  [1, 22, 39],
  [253, 255, 252],
  [46, 196, 182],
  [231, 29, 54],
  [255, 159, 28],
];

function setup() {
  createCanvas(600, 600);
  strokeWeight(lineThickness);
  noFill();
  background(1, 22, 39);
}

function draw() {
  translate(300, 300);
  // Use three nested for loops
  for (let i = 0; i < numLines; i++) {
    for (let j = 0; j < numLines; j++) {
      for (let k = 0; k < numLines; k++) {
        // can use COS as well for different shapes
        let x = cos(angle + i / numLines) * lineLength;
        let y = sin(angle + j / numLines) * lineLength;
        let z = sin(angle + k / numLines) * lineLength;
        let colorIndex = (i + j + k) % palette.length;
        stroke(
          palette[colorIndex][0],
          palette[colorIndex][1],
          palette[colorIndex][2]
        );
        line(x, y, z, -x, -y, -z);
      }
    }
  }
  angle += speed;
}
