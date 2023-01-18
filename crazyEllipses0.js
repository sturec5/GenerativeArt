const canvasWidth = 400;
const canvasHeight = 400;
const centerX = canvasWidth / 2;
const centerY = canvasHeight / 2;
const maxRadius = 200;
const numShapes = 15;
const shapeSize = 20;
const shapeRotationSpeed = 0.1;
const colorPalette = [
  color(255, 190, 11),
  color(251, 86, 7),
  color(255, 0, 110),
  color(131, 56, 236),
  color(58, 134, 255),
];

let angle = 0;

function setup() {
  createCanvas(canvasWidth, canvasHeight);
  noStroke();
}

function draw() {
  background(51);
  translate(centerX, centerY);

  polarTriangles(
    numShapes,
    shapeSize,
    maxRadius,
    (index, angleIncrement, size, radius) => {
      return [
        index * angleIncrement,
        angle,
        size,
        radius - index * (radius / numShapes),
      ];
    }
  );

  polarEllipses(
    numShapes,
    shapeSize,
    shapeSize,
    maxRadius,
    (index, angleIncrement, width, height, radius) => {
      return [
        index * angleIncrement,
        angle,
        width,
        height,
        radius - index * (radius / numShapes),
      ];
    }
  );

  angle += shapeRotationSpeed;
}

function color(r, g, b) {
  return `rgb(${r}, ${g}, ${b})`;
}
