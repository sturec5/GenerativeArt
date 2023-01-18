let numLines = 60;
let lineLength = 150;
let angle = 0;
let angleVelocity = 0.1;

function setup() {
  createCanvas(400, 400);
  background(1, 22, 39);
  noFill();
  strokeWeight(3);
  strokeCap(ROUND);
  smooth();
}

function draw() {
  translate(width / 2, height / 2);
  rotate(angle);

  for (let i = 0; i < numLines; i++) {
    let t = map(i, 0, numLines, 0, TWO_PI);
    let x = lineLength * cos(t);
    let y = lineLength * sin(t);
    stroke(lerpColor(color(46, 196, 182), color(253, 255, 252), i / numLines));
    line(0, 0, x, y);
  }

  for (let j = 0; j < numLines; j++) {
    let t = map(j, 0, numLines, 0, TWO_PI);
    let x = lineLength * cos(t);
    let y = lineLength * sin(t);
    stroke(lerpColor(color(231, 29, 54), color(255, 159, 28), j / numLines));
    line(0, 0, x, y);
  }

  angle += angleVelocity;
}
