let canvas;
let palette;
let angle;
let offset;
let numPoints;
let step;
let radius;

function setup() {
  canvas = createCanvas(600, 600, WEBGL);
  palette = [
    color("#0B3954"),
    color("#087E8B"),
    color("#BFD7EA"),
    color("#FF5A5F"),
    color("#C81D25"),
  ];
  angle = 0;
  offset = 0;
  numPoints = 50;
  step = TWO_PI / numPoints;
  radius = 200;
}

function draw() {
  background(1, 22, 39, 10);
  strokeWeight(11);
  noFill();
  rotateX(angle);
  rotateY(angle / 2);
  angle += 0.01;
  offset += 0.1;

  for (let i = 0; i < numPoints; i++) {
    let x = sin(step * i + offset) * radius;
    let y = cos(step * i + offset) * radius;
    let z = map(i, 0, numPoints, -100, 100);
    let c = palette[i % palette.length];
    stroke(c);
    line(0, 0, 0, x, y, z);
  }
}
