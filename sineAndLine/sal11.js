let angle = 0;
let radius = 100;

function setup() {
  createCanvas(400, 400);
  noFill();
  strokeWeight(2);
  angleMode(DEGREES);
}

function draw() {
  background(1, 22, 39);
  translate(200, 200);

  for (let i = 0; i < 360; i += 1) {
    let x1 = radius * cos(i);
    let y1 = radius * sin(i);
    let x2 = radius * cos(i + angle);
    let y2 = radius * sin(i + angle);

    let c = lerpColor(color(253, 255, 252), color(46, 196, 182), i / 360);
    let d = lerpColor(color(231, 29, 54), color(255, 159, 28), i / 360);
    let col = lerpColor(c, d, sin(angle + i));
    stroke(col);

    line(x1, y1, x2, y2);
  }

  angle += 1;
}
