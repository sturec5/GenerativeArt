const numLines = 100;
const radius = 200;
const colorPalette = [
  "#001219",
  "#005f73",
  "#0a9396",
  "#94d2bd",
  "#e9d8a6",
  "#ee9b00",
  "#ca6702",
  "#bb3e03",
  "#ae2012",
  "#9b2226",
];

function setup() {
  createCanvas(600, 600);
  strokeWeight(2);
  noFill();
}

function draw() {
  background(255);
  translate(width / 2, height / 2);
  let angle = 0;
  while (angle < TWO_PI) {
    // loop through angles from 0 to 2 * PI
    let x1 = radius * cos(angle); // x-coordinate of the first point
    let y1 = radius * sin(angle); // y-coordinate of the first point

    let lineLength = map(sin(frameCount * 0.01 + angle), -1, 1, 50, 200); // line length
    let x2 = x1 + lineLength * cos(angle + PI / 2); // x-coordinate of the second point
    let y2 = y1 + lineLength * sin(angle + PI / 2); // y-coordinate of the second point

    let colorIndex = floor(map(angle, 0, TWO_PI, 0, colorPalette.length));
    stroke(colorPalette[colorIndex]);
    line(x1, y1, x2, y2);

    angle += TWO_PI / numLines;
  }

  let radius2 = radius / 2; // radius of the inner circle
  let angle2 = 0;
  while (angle2 < TWO_PI) {
    let x1 = radius2 * cos(angle2); // x-coordinate of the first point
    let y1 = radius2 * sin(angle2); // y-coordinate of the first point

    let lineLength2 = map(sin(frameCount * 0.01 + angle2), -1, 1, 50, 200); // line length
    let x2 = x1 + lineLength2 * cos(angle2 + PI / 2); // x-coordinate of the second point
    let y2 = y1 + lineLength2 * sin(angle2 + PI / 2); // y-coordinate of the second point

    let colorIndex2 = floor(map(angle2, 0, TWO_PI, 0, colorPalette.length));
    stroke(colorPalette[colorIndex2]);
    line(x1, y1, x2, y2);

    angle2 += TWO_PI / numLines;
  }
}
