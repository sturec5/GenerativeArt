let x1;
let y1;
let x2;
let y2;
let x3;
let y3;

let time = 0;
let angle1 = 0;
let angle2 = 0;
let angle3 = 0;

function setup() {
  createCanvas(400, 400);
  x1 = width / 2;
  y1 = height / 2;
  x2 = width / 2;
  y2 = height / 2;
  x3 = width / 2;
  y3 = height / 2;
}

function draw() {
  background(1, 22, 39, 20);

  angle1 += 0.03;
  angle2 += 0.04;
  angle3 += 0.05;

  x1 = width / 2 + sin(angle1) * 100;
  y1 = height / 2 + cos(angle1) * 100;
  x2 = width / 2 + sin(angle2) * 100;
  y2 = height / 2 + cos(angle2) * 100;
  x3 = width / 2 + sin(angle3) * 100;
  y3 = height / 2 + cos(angle3) * 100;

  // lines
  stroke(253, 255, 252);
  line(x1, y1, x2, y2);
  stroke(46, 196, 182);
  line(x2, y2, x3, y3);
  stroke(231, 29, 54);
  line(x3, y3, x1, y1);

  // vertices
  fill(255, 159, 28);
  noStroke();
  ellipse(x1, y1, 10, 10);
  ellipse(x2, y2, 10, 10);
  ellipse(x3, y3, 10, 10);

  time += 0.01;
}
